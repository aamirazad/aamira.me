import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
    slug: string;
    title: string;
    description?: string;
    date?: string;
    tags?: string[];
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getPostSlugs(): string[] {
    if (!fs.existsSync(BLOG_DIR)) return [];
    return fs
        .readdirSync(BLOG_DIR)
        .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
        .map((f) => f.replace(/\.(mdx|md)$/i, ""));
}

function slugToTitle(slug: string): string {
    return slug
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

function stripHtmlComments(s: string): string {
    return s.replace(/<!--[\s\S]*?-->/g, "\n");
}

function extractTitleFromContent(content: string): string | undefined {
    const cleaned = stripHtmlComments(content);
    const lines = cleaned.split(/\r?\n/).map((l) => l.trim());
    const h1 = lines.find((l) => /^#\s+/.test(l));
    if (h1) return h1.replace(/^#\s+/, "").trim();
    const h2 = lines.find((l) => /^##\s+/.test(l));
    if (h2) return h2.replace(/^##\s+/, "").trim();
    const firstText = lines.find((l) => l.length > 0);
    return firstText?.trim();
}

function extractDescription(content: string, maxLen = 180): string {
    const cleaned = stripHtmlComments(content)
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/`[^`]*`/g, " ")
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
        .replace(/<[^>]+>/g, " ")
        .replace(/[#>*_`~\-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    return cleaned.length > maxLen
        ? cleaned.slice(0, maxLen - 1).trimEnd() + "…"
        : cleaned;
}

function toISODateString(d: Date): string {
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10);
}

export async function getPostMeta(slug: string): Promise<PostMeta | null> {
    const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
    const mdPath = path.join(BLOG_DIR, `${slug}.md`);
    const fullPath = fs.existsSync(mdxPath)
        ? mdxPath
        : fs.existsSync(mdPath)
        ? mdPath
        : null;
    if (!fullPath) return null;

    try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const title =
            data.title ?? extractTitleFromContent(content) ?? slugToTitle(slug);
        const description = data.description ?? extractDescription(content);

        let date: string | undefined;
        if (typeof data.date === "string" && !isNaN(Date.parse(data.date))) {
            date = data.date;
        } else {
            const stat = fs.statSync(fullPath);
            date = toISODateString(stat.mtime);
        }

        const tagsRaw = data.tags as unknown;
        const tags = Array.isArray(tagsRaw)
            ? tagsRaw
            : typeof tagsRaw === "string"
            ? [tagsRaw]
            : [];

        return { slug, title, description, date, tags } as PostMeta;
    } catch {
        return null;
    }
}

export async function getAllPosts(): Promise<PostMeta[]> {
    const slugs = getPostSlugs();
    const metas = await Promise.all(slugs.map((s) => getPostMeta(s)));
    return metas
        .filter((m): m is PostMeta => Boolean(m))
        .sort((a, b) => {
            const at = new Date(a.date || "1970-01-01").getTime();
            const bt = new Date(b.date || "1970-01-01").getTime();
            if (bt === at) return a.slug.localeCompare(b.slug);
            return bt - at;
        });
}

export function getPostContent(slug: string): {
    content: string;
    ext: "mdx" | "md" | null;
} {
    const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
    const mdPath = path.join(BLOG_DIR, `${slug}.md`);
    const fullPath = fs.existsSync(mdxPath)
        ? mdxPath
        : fs.existsSync(mdPath)
        ? mdPath
        : null;
    if (!fullPath) return { content: "", ext: null };
    const content = fs.readFileSync(fullPath, "utf8");
    return { content, ext: fullPath.endsWith(".mdx") ? "mdx" : "md" };
}

import fs from "fs";
import path from "path";

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
}

const contentDirectory = path.join(process.cwd(), "src/content/blog");

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    try {
        // Check if content directory exists
        if (!fs.existsSync(contentDirectory)) {
            return [];
        }

        const fileNames = fs.readdirSync(contentDirectory);
        const mdxFiles = fileNames.filter((name) => name.endsWith(".mdx"));

        const posts = await Promise.all(
            mdxFiles.map(async (fileName) => {
                const slug = fileName.replace(/\.mdx$/, "");

                try {
                    // Dynamically import the MDX file to get its metadata
                    const mdxModule = await import(
                        `@/content/blog/${slug}.mdx`
                    );
                    const metadata = mdxModule.metadata;

                    return {
                        slug,
                        title: metadata?.title || slug,
                        description: metadata?.description || "",
                        date:
                            metadata?.date ||
                            new Date().toISOString().split("T")[0],
                        tags: metadata?.tags || [],
                    };
                } catch (error) {
                    console.error(`Error importing ${slug}:`, error);
                    return null;
                }
            })
        );

        // Filter out null values and sort by date
        const validPosts = posts.filter(
            (post): post is BlogPost => post !== null
        );
        return validPosts.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    } catch (error) {
        console.error("Error reading blog posts:", error);
        return [];
    }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        // Dynamically import the MDX file to get its metadata
        const mdxModule = await import(`@/content/blog/${slug}.mdx`);
        const metadata = mdxModule.metadata;

        return {
            slug,
            title: metadata?.title || slug,
            description: metadata?.description || "",
            date: metadata?.date || new Date().toISOString().split("T")[0],
            tags: metadata?.tags || [],
        };
    } catch (error) {
        console.error(`Error reading blog post ${slug}:`, error);
        return null;
    }
}

export function getBlogPostSlugs(): string[] {
    try {
        if (!fs.existsSync(contentDirectory)) {
            return [];
        }

        const fileNames = fs.readdirSync(contentDirectory);
        return fileNames
            .filter((name) => name.endsWith(".mdx"))
            .map((name) => name.replace(/\.mdx$/, ""));
    } catch (error) {
        console.error("Error reading blog post slugs:", error);
        return [];
    }
}

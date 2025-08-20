import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPostMeta } from "@/lib/blog";
import StripFrontmatter from "@/components/strip-frontmatter";

interface BlogPostPageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = params;
    const post = await getPostMeta(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: post.title,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = params;
    const post = await getPostMeta(slug);

    if (!post) notFound();

    let MDXContent: any;
    try {
        const mdxModule = await import(`@/content/blog/${slug}.mdx`);
        MDXContent = mdxModule.default;
    } catch {
        try {
            const mdModule = await import(`@/content/blog/${slug}.md`);
            MDXContent = mdModule.default;
        } catch {
            notFound();
        }
    }

    const validDate = post.date && !isNaN(Date.parse(post.date));

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to blog
                </Link>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                        {validDate && (
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <time>
                                    {new Date(post.date!).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                </time>
                            </div>
                        )}
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex items-center gap-2">
                                <Tag className="w-4 h-4" />
                                <div className="flex gap-1">
                                    {post.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {post.description && (
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {post.description}
                        </p>
                    )}
                </div>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <StripFrontmatter>
                    <MDXContent />
                </StripFrontmatter>
            </div>
        </div>
    );
}

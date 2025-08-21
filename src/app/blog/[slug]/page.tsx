import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getBlogPost, getBlogPostSlugs } from "@/lib/blog";
import { Separator } from "@/components/ui/separator";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return getBlogPostSlugs().map((slug) => ({
        slug,
    }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    // Dynamically import the MDX component
    let MDXContent;
    try {
        const mdxModule = await import(`@/content/blog/${slug}.mdx`);
        MDXContent = mdxModule.default;
    } catch (error) {
        notFound();
    }

    return (
        <div className="min-h-screen w-full">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="mb-8 sm:mb-10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium mb-6 sm:mb-8 font-inter group"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to blog
                    </Link>

                    <div className="space-y-4 sm:space-y-6">
                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time className="font-medium">
                                    {new Date(post.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        }
                                    )}
                                </time>
                            </div>
                            {post.tags && post.tags.length > 0 && (
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4" />
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="font-medium text-xs"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-newsreader font-normal max-w-3xl">
                            {post.description}
                        </p>

                        <div className="pt-2">
                            <Separator />
                        </div>
                    </div>
                </div>

                <article className="blog-content max-w-none text-lg sm:text-xl font-newsreader text-neutral-800 dark:text-neutral-200">
                    <MDXContent />
                </article>
            </div>
        </div>
    );
}

import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// List of available blog posts
const blogPosts = [
    {
        slug: "building-modern-homelab",
        title: "Building a Modern Homelab: My Journey",
        description:
            "How I built a secure and reliable homelab infrastructure from scratch, including hardware choices, networking setup, and the services I'm running.",
        date: "2024-01-15",
        tags: ["homelab", "networking", "self-hosting"],
    },
    {
        slug: "why-open-source",
        title: "Why I Choose Open Source",
        description:
            "My thoughts on the importance of open source software and how it has shaped my development journey.",
        date: "2024-01-10",
        tags: ["open-source", "philosophy", "development"],
    },
];

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

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
    const post = blogPosts.find((p) => p.slug === slug);

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
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <time>
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

                    <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {post.description}
                    </p>
                </div>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
                <MDXContent />
            </div>
        </div>
    );
}

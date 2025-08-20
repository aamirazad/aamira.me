import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-400">
                    Thoughts on technology, learning, and building things.
                </p>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-neutral-600 dark:text-neutral-400">
                        No blog posts yet. Check back soon!
                    </p>
                </div>
            ) : (
                <div className="space-y-8">
                    {posts.map((post) => {
                        const validDate =
                            post.date && !isNaN(Date.parse(post.date));
                        return (
                            <article
                                key={post.slug}
                                className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all group"
                            >
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-block"
                                        >
                                            <h2 className="text-2xl font-semibold group-hover:text-orange-500 transition-colors">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                                            {validDate && (
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <time>
                                                        {new Date(
                                                            post.date!
                                                        ).toLocaleDateString(
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
                                            {post.tags &&
                                                post.tags.length > 0 && (
                                                    <div className="flex items-center gap-2">
                                                        <Tag className="w-4 h-4" />
                                                        <div className="flex gap-1">
                                                            {post.tags.map(
                                                                (tag) => (
                                                                    <Badge
                                                                        key={
                                                                            tag
                                                                        }
                                                                        variant="secondary"
                                                                        className="text-xs"
                                                                    >
                                                                        {tag}
                                                                    </Badge>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {post.description}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-600 transition-colors text-sm font-medium"
                                    >
                                        Read more
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

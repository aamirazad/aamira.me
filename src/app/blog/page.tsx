import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
	const posts = await getAllBlogPosts();

	return (
		<div className="space-y-8">
			<div className="space-y-4">
				<h1 className="font-bold text-4xl tracking-tight">Blog</h1>
				<p className="text-neutral-600 text-xl dark:text-neutral-400">
					Thoughts on technology, learning, and building things.
				</p>
			</div>

			{posts.length === 0 ? (
				<div className="py-12 text-center">
					<p className="text-neutral-600 dark:text-neutral-400">
						No blog posts yet. Check back soon!
					</p>
				</div>
			) : (
				<div className="space-y-8">
					{posts.map((post) => (
						<article
							key={post.slug}
							className="group rounded-lg border border-neutral-200 p-6 transition-all hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
						>
							<div className="space-y-4">
								<div className="space-y-2">
									<Link
										href={`/blog/${post.slug}`}
										className="inline-block"
									>
										<h2 className="font-semibold text-2xl transition-colors group-hover:text-orange-500">
											{post.title}
										</h2>
									</Link>
									<div className="flex items-center gap-4 text-neutral-600 text-sm dark:text-neutral-400">
										<div className="flex items-center gap-1">
											<Calendar className="h-4 w-4" />
											<time>
												{new Date(
													post.date,
												).toLocaleDateString("en-US", {
													year: "numeric",
													month: "long",
													day: "numeric",
												})}
											</time>
										</div>
										{post.tags && post.tags.length > 0 && (
											<div className="flex items-center gap-2">
												<Tag className="h-4 w-4" />
												<div className="flex gap-1">
													{post.tags.map((tag) => (
														<Badge
															key={tag}
															variant="secondary"
															className="text-xs"
														>
															{tag}
														</Badge>
													))}
												</div>
											</div>
										)}
									</div>
								</div>
								<p className="text-neutral-600 leading-relaxed dark:text-neutral-400">
									{post.description}
								</p>
								<Link
									href={`/blog/${post.slug}`}
									className="inline-flex items-center gap-1 font-medium text-orange-500 text-sm transition-colors hover:text-orange-600"
								>
									Read more
									<ArrowUpRight className="h-4 w-4" />
								</Link>
							</div>
						</article>
					))}
				</div>
			)}
		</div>
	);
}

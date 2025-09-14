import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBlogPost, getBlogPostSlugs } from "@/lib/blog";

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
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div className="mb-8 sm:mb-10">
					<Link
						href="/blog"
						className="group mb-6 inline-flex items-center gap-2 font-inter font-medium text-orange-500 text-sm transition-colors hover:text-orange-600 sm:mb-8"
					>
						<ArrowLeft className="group-hover:-translate-x-1 h-4 w-4 transition-transform" />
						Back to blog
					</Link>

					<div className="space-y-4 sm:space-y-6">
						<h1 className="font-bold text-4xl text-neutral-900 leading-tight tracking-tight dark:text-neutral-100">
							{post.title}
						</h1>

						<div className="flex flex-wrap items-center gap-3 text-neutral-600 text-sm sm:gap-4 dark:text-neutral-400">
							<div className="flex items-center gap-2">
								<Calendar className="h-4 w-4" />
								<time className="font-medium">
									{new Date(post.date).toLocaleDateString(
										"en-US",
										{
											year: "numeric",
											month: "long",
											day: "numeric",
										},
									)}
								</time>
							</div>
							{post.tags && post.tags.length > 0 && (
								<div className="flex items-center gap-2">
									<Tag className="h-4 w-4" />
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

						<p className="max-w-3xl font-newsreader font-normal text-lg text-neutral-600 leading-relaxed sm:text-xl dark:text-neutral-400">
							{post.description}
						</p>

						<div className="pt-2">
							<Separator />
						</div>
					</div>
				</div>

				<article className="blog-content max-w-none font-newsreader text-lg text-neutral-800 sm:text-xl dark:text-neutral-200">
					<MDXContent />
				</article>
			</div>
		</div>
	);
}

import { ArrowUpRight, Sparkles, Code2, Server } from "lucide-react";
import { useful, projects, homelab } from "./links";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Blog posts data (shared between pages)
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

export default function Page() {
    const recentPosts = blogPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="flex justify-center">
                <div className="max-w-4xl w-full">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 h-auto lg:h-36">
                        <Avatar className="size-24 lg:size-32 ring-2 ring-neutral-200 dark:ring-neutral-800">
                            <AvatarImage
                                src="https://files.aamira.me/inbox/7846690e25ca5ecdb6bd3d1ca9b7c800.webp"
                                alt="Profile Picture"
                                className="object-cover"
                            />
                            <AvatarFallback>
                                <div className="text-2xl font-bold">AA</div>
                            </AvatarFallback>
                        </Avatar>
                        <div className="text-center lg:text-left">
                            <h1 className="scroll-m-20 text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                                Aamir Azad
                            </h1>
                            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-4">
                                Student, Developer & Homelab Enthusiast
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
                                Building ambitious projects and learning in
                                public. Passionate about open source,
                                networking, and creating solutions that make a
                                difference.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Blog Posts */}
            {recentPosts.length > 0 && (
                <section className="flex justify-center">
                    <div className="max-w-4xl w-full">
                        <div className="flex items-center space-x-2 mb-8">
                            <Sparkles className="w-6 h-6 text-orange-500" />
                            <h2 className="text-3xl font-semibold tracking-tight">
                                Recent Posts
                            </h2>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {recentPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group block p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                                >
                                    <h3 className="font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <time className="text-xs text-neutral-500">
                                            {new Date(
                                                post.date
                                            ).toLocaleDateString()}
                                        </time>
                                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link
                                href="/blog"
                                className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
                            >
                                <span>View all posts</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Useful Links */}
            <section className="flex justify-center">
                <div className="max-w-4xl w-full">
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 mb-6">
                        Useful Links
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {useful.map((link) => (
                            <a
                                key={link.href}
                                className="flex items-center p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                rel="noopener noreferrer"
                                target="_blank"
                                href={link.href}
                            >
                                <ArrowUpRight className="w-4 h-4 mr-2 opacity-60" />
                                <span className="text-sm font-medium">
                                    {link.text}
                                </span>
                            </a>
                        ))}
                    </div>
                    <div className="mt-6">
                        <Link
                            className="inline-flex items-center space-x-2 text-orange-500 hover:text-orange-600 transition-colors"
                            href="/quick"
                        >
                            <span>More links</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="flex justify-center">
                <div className="max-w-4xl w-full">
                    <div className="flex items-center space-x-2 mb-6">
                        <Code2 className="w-6 h-6 text-blue-500" />
                        <h2 className="text-3xl font-semibold tracking-tight">
                            Projects
                        </h2>
                    </div>
                    <p className="mb-8 text-neutral-600 dark:text-neutral-400">
                        Instead of wasting time on social media, I devote almost
                        all of my free time to learning and building with what I
                        have learned. I have built many projects, each more
                        ambitious than the last in order to continue to push
                        myself and prepare myself for the future.
                    </p>
                    <div className="grid gap-6">
                        {projects.map((item) => (
                            <div
                                key={item.href}
                                className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all"
                            >
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <a
                                            className="text-lg font-semibold hover:text-orange-500 transition-colors"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href={item.href}
                                        >
                                            {item.text}
                                        </a>
                                        {item.wip && (
                                            <Badge
                                                variant="outline"
                                                className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
                                            >
                                                Work in progress
                                            </Badge>
                                        )}
                                        {item.badge && (
                                            <Badge
                                                variant="outline"
                                                className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"
                                            >
                                                {item.badge}
                                            </Badge>
                                        )}
                                        {item.github && (
                                            <a
                                                className="hover:text-orange-500 transition-colors"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href={item.github}
                                                title="View source code"
                                            >
                                                <SiGithub width={20} />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Homelab */}
            <section className="flex justify-center">
                <div className="max-w-4xl w-full">
                    <div className="flex items-center space-x-2 mb-6">
                        <Server className="w-6 h-6 text-green-500" />
                        <h2 className="text-3xl font-semibold tracking-tight">
                            Homelab
                        </h2>
                    </div>
                    <p className="mb-8 text-neutral-600 dark:text-neutral-400">
                        With the purpose of teaching myself networking as well
                        as creating services I use every day, I have built a
                        homelab setup. Run on a network of computers from an old
                        machine I bought on eBay to a raspberry pi, my
                        infrastructure hosts thousands of gigabytes of data and
                        many intensive services with{" "}
                        <a
                            className="underline hover:text-orange-500 transition-colors"
                            href="https://status.aamira.me/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            relatively high uptime
                        </a>
                        . With zero open ports, I have built a secure and
                        reliable system to support me and my family.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {homelab.map((link) => (
                            <a
                                key={link.href}
                                className="flex items-center p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg transition-all hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                                rel="noopener noreferrer"
                                target="_blank"
                                href={link.href}
                            >
                                <div className="mr-3 text-neutral-600 dark:text-neutral-400">
                                    {link.icon ? link.icon() : <ArrowUpRight />}
                                </div>
                                <span className="font-medium">{link.text}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mb-16 mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        © {new Date().getFullYear()} Aamir Azad
                    </p>
                    <div className="flex space-x-4 text-sm">
                        <Link
                            href="/blog"
                            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/quick"
                            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                        >
                            Quick Links
                        </Link>
                        <a
                            href="https://github.com/aamirazad"
                            className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 text-sm"></div>
            </div>
        </footer>
    );
}

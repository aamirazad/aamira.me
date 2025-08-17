import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-neutral-100">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-8 text-neutral-900 dark:text-neutral-100">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-2xl font-semibold tracking-tight mb-3 mt-6 text-neutral-900 dark:text-neutral-100">
            {children}
        </h3>
    ),
    p: ({ children }) => (
        <p className="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
            {children}
        </p>
    ),
    ul: ({ children }) => (
        <ul className="mb-4 ml-6 list-disc space-y-2 text-neutral-700 dark:text-neutral-300">
            {children}
        </ul>
    ),
    ol: ({ children }) => (
        <ol className="mb-4 ml-6 list-decimal space-y-2 text-neutral-700 dark:text-neutral-300">
            {children}
        </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    strong: ({ children }) => (
        <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            {children}
        </strong>
    ),
    code: ({ children }) => (
        <code className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-sm font-mono text-orange-600 dark:text-orange-400">
            {children}
        </code>
    ),
    pre: ({ children }) => (
        <pre className="mb-4 p-4 bg-neutral-900 rounded-lg overflow-x-auto">
            <code className="text-neutral-100 text-sm font-mono">
                {children}
            </code>
        </pre>
    ),
    blockquote: ({ children }) => (
        <blockquote className="mb-4 pl-4 border-l-4 border-orange-500 italic text-neutral-600 dark:text-neutral-400">
            {children}
        </blockquote>
    ),
    a: ({ children, href }) => (
        <a
            href={href}
            className="text-orange-500 hover:text-orange-600 underline transition-colors"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        >
            {children}
        </a>
    ),
};

export function useMDXComponents(): MDXComponents {
    return components;
}

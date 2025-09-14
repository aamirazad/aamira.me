export default function robots() {
	return {
		rules: [
			{
				userAgent: "GPTBot",
				disallow: "/",
			},
			{
				userAgent: "ChatGPT-User",
				disallow: "/",
			},
			{
				userAgent: "Google-Extended",
				disallow: "/",
			},
			{
				userAgent: "CCBot",
				disallow: "/",
			},
			{
				userAgent: "anthropic-ai",
				disallow: "/",
			},
			{
				userAgent: "Claude-Web",
				disallow: "/",
			},
			{
				userAgent: "ClaudeBot",
				disallow: "/",
			},
			{
				userAgent: "PerplexityBot",
				disallow: "/",
			},
			{
				userAgent: "*",
				allow: "/",
			},
		],
	};
}

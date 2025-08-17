import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import Script from "next/script";
import Footer from "./components/footer";

export const metadata: Metadata = {
    title: {
        default: "Aamir Azad",
        template: "",
    },
    description: "",
    openGraph: {
        title: "Trip To Turkey",
        description: "Enjoy",
        siteName: "Aamir Azad",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                "text-black bg-white dark:text-white dark:bg-black",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <head></head>
            <body className="antialiased max-w-6xl mx-auto px-4 mt-8">
                <main className="flex-auto min-w-0 mt-6 flex flex-col">
                    {/* Rybbit Analytics */}
                    <Script
                        src="https://app.rybbit.io/api/script.js"
                        data-site-id="1494"
                        strategy="afterInteractive"
                    />
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}

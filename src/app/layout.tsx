import "./global.css";
import type { Metadata } from "next";
import { Inter, Merriweather, Newsreader, Oswald } from "next/font/google";
import { Navbar } from "./components/nav";
import Script from "next/script";
import Footer from "./components/footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Aamir Azad",
    template: "",
  },
  description: "",
  openGraph: {
    title: "Aamir's Personal Site",
    description: "My little corner of the internet",
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "text-black bg-white dark:text-white dark:bg-black",
        inter.variable,
        merriweather.variable,
        newsreader.variable,
        oswald.variable,
      )}
    >
      <head></head>
      <body className="antialiased max-w-6xl mx-auto px-4 mt-8">
        <main className="flex-auto min-w-0 mt-6 flex flex-col">
          {/* Rybbit Analytics */}
          <Script
            src="/api/script.js"
            data-site-id="1"
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

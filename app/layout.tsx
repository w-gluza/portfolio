import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./styles/reset.css";
import "./styles/globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wiola.dev"),
  alternates: { canonical: "/" },
  title: "Wioletta Gluza - Senior Frontend Engineer, London",
  description:
    "Senior Frontend Engineer building AI products with React and TypeScript. Based in London.",
  keywords: [
    "Senior Frontend Engineer",
    "AI Products",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Frontend Architecture",
    "Design Systems",
    "Observability",
    "Agentic Workflows",
    "London",
  ],
  authors: [{ name: "Wioletta Gluza", url: "https://github.com/w-gluza" }],
  creator: "Wioletta Gluza",
  openGraph: {
    title: "Wioletta Gluza - Senior Frontend Engineer, London",
    description:
      "Senior Frontend Engineer building AI products with React and TypeScript. Based in London.",
    url: "/",
    siteName: "Wioletta Gluza Portfolio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wioletta Gluza - Senior Frontend Engineer, London",
    description:
      "Senior Frontend Engineer building AI products with React and TypeScript. Based in London.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={jakartaSans.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

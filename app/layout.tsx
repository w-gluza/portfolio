import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wioletta Gluza - Front-End Developer",
  description:
    "Experienced Front-End Developer specializing in React and TypeScript. Based in London. Let's build something great together.",
  keywords: [
    "Front-End Developer",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Storybook",
    "Design Systems",
    "Web Development",
    "Developer Portfolio",
    "London",
  ],
  authors: [{ name: "Wioletta Gluza", url: "https://github.com/w-gluza" }],
  creator: "Wioletta Gluza",
  openGraph: {
    title: "Wioletta Gluza - Front-End Developer",
    description:
      "Experienced Front-End Developer specializing in React and TypeScript. Based in London.",
    url: "https://www.wiola.dev/",
    siteName: "Wioletta Gluza Portfolio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Wioletta Gluza - Front-End Developer",
    description:
      "Experienced Front-End Developer specializing in React and TypeScript. Based in London.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

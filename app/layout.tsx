import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./styles/reset.css";
import "./styles/globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
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
      <body className={`${jakartaSans.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

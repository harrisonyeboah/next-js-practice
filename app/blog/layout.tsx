import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Planner",
  description: "This is an AI Planner built with Next.js and OpenAI's API.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
          <Link href='/blog/javascript'>JavaScript</Link>
          <Link href='/blog/css'>CSS</Link>
          <Link href='/dashboard/devops'>DevOps</Link>
        </nav>

        <main className="flex-1">
          {children}
        </main>

        <footer>
          <h1>This is the footer</h1>
        </footer>
      </body>
    </html>
  );
}
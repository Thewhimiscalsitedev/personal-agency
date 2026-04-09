import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agency — Crafting Digital Excellence",
  description:
    "A world-class digital agency building bold, purposeful products for forward-thinking brands.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Agency — Crafting Digital Excellence",
    description:
      "A world-class digital agency building bold, purposeful products for forward-thinking brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[--background] text-[--foreground]">
        {/* Skip to main content — EAA / WCAG 2.4.1 */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

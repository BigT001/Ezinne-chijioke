import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezinne Chijioke - Product Designer | UX/UI Expert",
  description: "Product Designer with over 2 years of experience crafting user-friendly digital products. Specialized in creating seamless user experiences that align with business goals.",
  keywords: ["Product Designer", "UX Design", "UI Design", "User Experience", "Interface Design", "Digital Products", "User-Centered Design", "Ezinne Chijioke"],
  authors: [{ name: "Ezinne Chijioke" }],
  creator: "Ezinne Chijioke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ezinne-chijioke.vercel.app",
    title: "Ezinne Chijioke - Product Designer",
    description: "Experienced Product Designer specializing in user-friendly digital experiences and interface design.",
    siteName: "Ezinne Chijioke Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ezinne Chijioke - Product Designer",
    description: "Creating user-centered digital experiences that drive business success.",
    creator: "@ezinnechijioke",
  },
  metadataBase: new URL("https://ezinne-chijioke.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <Header />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}

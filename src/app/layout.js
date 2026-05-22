import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GlobalGridBackground from "@/components/GlobalGridBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Abu Saieed | Full Stack Developer Portfolio",
  description:
    "Portfolio of Abu Saieed — an aspiring full-stack developer building modern, responsive, and user-friendly web applications with React, Next.js, and more.",
  keywords: [
    "Abu Saieed",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Web Developer",
  ],
  openGraph: {
    title: "Abu Saieed | Full Stack Developer Portfolio",
    description:
      "Building modern, responsive, and user-friendly web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="noise-overlay font-[var(--font-inter)] bg-[#0a0a0a] min-h-screen relative overflow-x-hidden">
        {/* Global Tech Background Layer */}
        <GlobalGridBackground />

        <SmoothScrollProvider>
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

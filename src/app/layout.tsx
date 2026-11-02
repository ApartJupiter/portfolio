import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gurjyot Singh Gill | AI Systems & Agentic Engineer",
  description:
    "AI Engineer specializing in agentic AI, stateful LLM workflows, RAG, tool orchestration, and AI safety in production B2B SaaS.",
  keywords: [
    "Gurjyot Singh Gill",
    "AI Engineer",
    "Agentic AI",
    "LangGraph",
    "PydanticAI",
    "LLM Architecture",
    "FastAPI",
    "RAG",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-transparent text-white min-h-screen selection:bg-hot/30 selection:text-white`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

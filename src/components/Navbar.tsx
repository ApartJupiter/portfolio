"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Shield, Cpu, FolderGit2, Mail, FileDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ${
        scrolled ? "top-3" : "top-6"
      }`}
    >
      <nav className="flex items-center justify-between gap-6 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-sky-950/30 max-w-4xl w-full">
        {/* Brand / Identifier */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-mono font-bold text-xs text-mist shadow-lg shadow-sky-950/30 group-hover:scale-105 transition-transform">
            GS
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-sky-100 transition-colors">
              Gurjyot Gill
            </span>
            <span className="text-[10px] text-sky-100 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-hot animate-pulse"></span>
              AI Engineer
            </span>
          </div>
        </a>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-medium text-white">
          <a
            href="#architecture"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Cpu className="w-3.5 h-3.5 text-sky-100" />
            Architecture
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-sky-100" />
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-sky-100" />
            Projects
          </a>
          <a
            href="#safety"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5 text-sky-100" />
            Safety & Systems
          </a>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Gurjyot_Resume_2026.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white hover:text-white bg-white/15 hover:bg-white/20 border border-white/20 transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-100" />
            Resume
          </a>
          <a
            href="mailto:gurjyotsingh28025@gmail.com"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-hot hover:bg-[#e84aa6] text-[#072D59] font-sans shadow-md shadow-hot/40 transition-all hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5" />
            Connect
          </a>
        </div>
      </nav>
    </header>
  );
}

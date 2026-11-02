/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Palette: Seal Blue #DBF2FC + Navy #072D59 + Crimson Pink.
        // NOTE: "white" is deliberately remapped to navy so the existing
        // text-white / bg-white/10 / border-white/20 classes in sections that
        // haven't been redesigned yet become dark-on-light. Replace per section.
        white: "rgb(var(--ink) / <alpha-value>)", // navy in light theme, seal blue in dark
        hot: "#FC6B80",
        blush: "rgb(var(--accent-text) / <alpha-value>)",
        brand: "rgb(var(--ink) / <alpha-value>)",
        mist: "rgb(var(--panel) / <alpha-value>)",
        sky: { 100: "rgb(var(--sky-ink) / <alpha-value>)", 200: "rgb(var(--sky-ink) / <alpha-value>)" },
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "#072D59",
          light: "#DBF2FC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],
};

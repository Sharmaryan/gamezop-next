import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        border_primary: "var(--border-primary-color)",
        background_primary: "var(--background-primary-color)",
        tooltip_color: "var(--tooltip-bg-color)"
      },
    },
  },
  plugins: [],
} satisfies Config;

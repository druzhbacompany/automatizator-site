import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx}","./pages/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        muted: "var(--color-muted)",
        primary: "var(--color-primary)"
      },
      borderRadius: {
        xl: "var(--radius-xl)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)"
      }
    }
  },
  plugins: [],
};
export default config;
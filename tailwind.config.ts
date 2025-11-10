import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 900: "#15272D", 800: "#19272D", 700: "#1B2E35", 600: "#25353B", 500: "#324148" },
        muted: { 400: "#3D4E55", 300: "#63888F" },
        accent: { glow: "#5DFFF4", mint: "#5A9196", deep: "#365C6B" }
      },
      boxShadow: { card: "0 10px 30px rgba(0,0,0,.25)", glow: "0 0 24px rgba(93,255,244,.45)" },
      borderRadius: { xl: "12px", "2xl": "20px" }
    }
  },
  plugins: []
};
export default config;

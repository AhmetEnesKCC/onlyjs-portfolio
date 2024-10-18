import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A29",
        primary: "#4CC873",
        subtle: "#31313F",
        input: "#F5F5F5",
      },
      fontFamily: {
        poppins: "var(--poppins)",
      },
    },
  },
  plugins: [],
};
export default config;

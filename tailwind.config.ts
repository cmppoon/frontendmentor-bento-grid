import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    theme: {
      fontSize: {
        base: ["18px", "28px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
    },
    extend: {
      colors: {
        purple100: "hsl(254, 88%, 90%)",
        purple500: "hsl(256, 67%, 59%)",
        yellow100: "hsl(31, 66%, 93%)",
        yellow500: "hsl(39, 100%, 71%)",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "up-gradient": "linear-gradient(180deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%)",
        "down-gradient": "linear-gradient(180deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%)",
      },
      colors: {
        "byteex-bage": '#F9F0E5',
        "byteex-blue": '#01005B',
        "byteex-text-gray": '#6C6C6C',
        "byteex-review-gray": '#828282',
        "byteex-gray": '#F0EEEF',      
        "byteex-gray-border": '#EDEDED',      
      },
      boxShadow: {
        'byteex-review': '0px 3px 10px 0px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};
export default config;

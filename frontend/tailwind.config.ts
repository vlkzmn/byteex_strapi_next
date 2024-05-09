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
        "gradient-benefits": "linear-gradient(180deg, #F9F0E5 -7.8%, rgba(249, 240, 229, 0.18) 38.6%, rgba(249, 240, 229, 0) 100%)",
        "gradient-benefits-md": "linear-gradient(180deg, #F9F0E5 -7.8%, rgba(249, 240, 229, 0.18) 38.6%, rgba(249, 240, 229, 0) 72%, rgba(249, 240, 229, 0.7) 100%)",
      },
      colors: {
        "byteex-bage": '#F9F0E5',
        "byteex-blue": '#01005B',
        "byteex-text-gray": '#6C6C6C',
        "byteex-review-gray": '#828282',
        "byteex-brands-gray": '#868787',
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

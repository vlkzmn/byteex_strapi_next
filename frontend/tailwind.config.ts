import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-benefits-up':
          'linear-gradient(180deg, #f9f0e5 -7.8%, rgba(249, 240, 229, 0.18) 38.6%, rgba(249, 240, 229, 0) 100%)',
        'gradient-benefits-up-down':
          'linear-gradient(180deg, #f9f0e5 -7.8%, rgba(249, 240, 229, 0.18) 38.6%, rgba(249, 240, 229, 0) 72%, rgba(249, 240, 229, 0.7) 100%)',
        'gradient-benefits-down':
          'linear-gradient(180deg, rgba(249, 240, 229, 0) 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 1) 100%)',
      },
      colors: {
        'byteex-bage': '#f9f0e5',
        'byteex-blue': '#01005b',
        'byteex-text-gray': '#6c6c6c',
        'byteex-review-gray': '#828282',
        'byteex-brands-gray': '#868787',
        'byteex-gray': '#f0eeef',
        'byteex-gray-border': '#ededed',
      },
      boxShadow: {
        'byteex-review': '0px 3px 10px 0px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
export default config;

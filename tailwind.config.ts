/* File: tailwind.config.ts */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], // Optional: Explicit content paths
  plugins: [require('tailwindcss-animate')],
};

export default config;
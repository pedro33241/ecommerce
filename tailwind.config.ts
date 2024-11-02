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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },   
      
      screens: {  
        'sx': '0px', 
        'md': '899px', 
        'mf': '930px',  
        'lg': '1087px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
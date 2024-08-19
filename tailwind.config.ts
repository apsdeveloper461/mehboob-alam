import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        navbar_color:'#070715',
        blueColorShade:'#101022',
        'custom-primary-100': '#0078d4',
        'custom-primary-200': '#0894ff',
        'custom-primary-300': '#3baaff',
        'custom-accent-100': '#ff6500',
        'custom-accent-200': '#ff6500',
        'custom-accent-300': '#ff6500',
        'custom-background-100': '#000e19',
        'custom-background-200': '#001c33',
        'custom-background-300': '#002b4c',
        'custom-text-100': '#f8fbfd',
        'custom-text-200': '#e4f0f7',
        'custom-text-300': '#d0e4f2',
      }
    },
  },
  plugins: [],
};
export default config;

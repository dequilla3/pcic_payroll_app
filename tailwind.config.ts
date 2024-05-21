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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    fontSize: {
      xss: "0.55rem", // Adjust the value according to your preference
      xs: "0.75rem", // Tailwind default extra small size
      sm: "0.875rem", // Tailwind default small size
      base: "1rem", // Tailwind default base size
      lg: "1.125rem", // Tailwind default large size
      xl: "1.25rem", // Tailwind default extra large size
      "2xl": "1.5rem", // Tailwind default 2 extra large size
      "3xl": "1.875rem", // Tailwind default 3 extra large size
      "4xl": "2.25rem", // Tailwind default 4 extra large size
      "5xl": "3rem", // Tailwind default 5 extra large size
      "6xl": "4rem", // Tailwind default 6 extra large size
      "7xl": "5rem", // Tailwind default 7 extra large size
    },
  },
  plugins: [],
};
export default config;

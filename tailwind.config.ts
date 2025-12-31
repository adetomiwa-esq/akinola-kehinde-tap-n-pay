import type { Config } from "tailwindcss"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
} satisfies Config

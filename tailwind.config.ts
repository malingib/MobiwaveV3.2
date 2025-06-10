import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blue: {
          50: "#eef9ff",
          100: "#d8f1ff",
          200: "#b8e8ff",
          300: "#83daff",
          400: "#48c2ff",
          500: "#1ea6ff",
          600: "#0084ff",
          700: "#0068d6",
          800: "#0055ae",
          900: "#064a8d",
          950: "#042e5c",
        },
        teal: {
          50: "#edfcf9",
          100: "#d2f7f1",
          200: "#a9efe5",
          300: "#72e2d6",
          400: "#40cbc1",
          500: "#26afa7",
          600: "#1d8c89",
          700: "#1c706f",
          800: "#1c5a5a",
          900: "#1b4a4b",
          950: "#0a2c2e",
        },
        purple: {
          50: "#f5f3ff",
          100: "#ede8ff",
          200: "#dcd5ff",
          300: "#c3b2ff",
          400: "#a586ff",
          500: "#8a55ff",
          600: "#7c33ff",
          700: "#6b21f5",
          800: "#581dce",
          900: "#4a1aa7",
          950: "#2d0e70",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config

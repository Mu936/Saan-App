import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // African-inspired warm color palette
        rust: {
          50: "#fef7f3",
          100: "#fdeee6",
          200: "#f9d4c1",
          300: "#f5ba9c",
          400: "#ed8753",
          500: "#B7472A",
          600: "#a54026",
          700: "#8a3520",
          800: "#6f2a1a",
          900: "#5a2216",
        },
        olive: {
          50: "#f8f8f4",
          100: "#f0f0e9",
          200: "#dadbc8",
          300: "#c4c5a7",
          400: "#989a65",
          500: "#8B8C2C",
          600: "#7d7e28",
          700: "#686921",
          800: "#53541a",
          900: "#444516",
        },
        sand: {
          50: "#fefdfb",
          100: "#fdfbf7",
          200: "#f9f3ea",
          300: "#f5ebdd",
          400: "#eddcc3",
          500: "#E6D7B1",
          600: "#cfc29f",
          700: "#aca185",
          800: "#89816a",
          900: "#706956",
        },
        brown: {
          50: "#f6f3f1",
          100: "#ede7e3",
          200: "#d2c4bc",
          300: "#b7a195",
          400: "#815b47",
          500: "#3C2415",
          600: "#362013",
          700: "#2d1b10",
          800: "#24150d",
          900: "#1e110a",
        },
        beige: {
          50: "#fefefe",
          100: "#fdfcfb",
          200: "#faf7f4",
          300: "#f7f2ed",
          400: "#f1e9df",
          500: "#F5F0E8",
          600: "#ddd8d1",
          700: "#b8b4ae",
          800: "#93908b",
          900: "#787572",
        },
        // Keep essential shadcn colors but update primary to rust
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#B7472A",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F5F0E8",
          foreground: "#3C2415",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#E6D7B1",
          foreground: "#3C2415",
        },
        accent: {
          DEFAULT: "#8B8C2C",
          foreground: "#ffffff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#3C2415",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        african:
          "0 4px 20px -2px rgba(183, 71, 42, 0.1), 0 2px 8px -2px rgba(183, 71, 42, 0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

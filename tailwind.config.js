/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode tokens
        background: "#e9e4d8",
        foreground: "#1e1e1e",
        card: {
          DEFAULT: "#f4efe4",
          foreground: "#1e1e1e",
        },
        popover: {
          DEFAULT: "#f4efe4",
          foreground: "#1e1e1e",
        },
        primary: {
          DEFAULT: "#2e2e2e",
          foreground: "#e6e4d7",
        },
        secondary: {
          DEFAULT: "#d8d2c4",
          foreground: "#2e2e2e",
        },
        muted: {
          DEFAULT: "#cfc8b8",
          foreground: "#5e5a52",
        },
        accent: {
          DEFAULT: "#e6e4d7",
          foreground: "#2e2e2e",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        border: "#d2cbbb",
        input: "#d2cbbb",
        ring: "#2e2e2e",
        chart: {
          1: "#f26a4b",
          2: "#1e1e1e",
          3: "#5e5a52",
          4: "#a89f8f",
          5: "#cfc8b8",
        },
        sidebar: {
          DEFAULT: "#e3ddcf",
          foreground: "#1e1e1e",
          primary: "#2e2e2e",
          "primary-foreground": "#e6e4d7",
          accent: "#e6e4d7",
          "accent-foreground": "#2e2e2e",
          border: "#d2cbbb",
          ring: "#2e2e2e",
        },

        // Dark mode tokens — used via dark: prefix
        dark: {
          background: "#141414",
          foreground: "#e8e3da",
          card: "#1c1c1c",
          "card-foreground": "#e8e3da",
          popover: "#1c1c1c",
          "popover-foreground": "#e8e3da",
          primary: "#d1cfc0",
          "primary-foreground": "#363636",
          secondary: "#222222",
          "secondary-foreground": "#d1cfc0",
          muted: "#2a2a2a",
          "muted-foreground": "#8e8a83",
          accent: "#363636",
          "accent-foreground": "#d1cfc0",
          destructive: "#ef4444",
          "destructive-foreground": "#ffffff",
          border: "#2c2c2c",
          input: "#2c2c2c",
          ring: "#d1cfc0",
          chart: {
            1: "#f26a4b",
            2: "#d9cfc2",
            3: "#8e8a83",
            4: "#5c5a56",
            5: "#3b3b3b",
          },
          sidebar: "#101010",
          "sidebar-foreground": "#e8e3da",
          "sidebar-primary": "#d1cfc0",
          "sidebar-primary-foreground": "#363636",
          "sidebar-accent": "#363636",
          "sidebar-accent-foreground": "#d1cfc0",
          "sidebar-border": "#2c2c2c",
          "sidebar-ring": "#d1cfc0",
        },
      },

      borderRadius: {
        lg: "8px", // --radius: 0.5rem
        md: "6px", // calc(0.5rem - 2px)
        sm: "4px", // calc(0.5rem - 4px)
        xl: "12px", // calc(0.5rem + 4px)
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

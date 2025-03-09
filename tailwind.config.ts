// @ts-nocheck
import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Open Sans", "Roboto", "sans-serif"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "2rem",
      "3xl": "1.75rem",
      "4xl": "2.25rem",
    },
    boxShadow: {
      base: "0 0 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      sm: "0 0 2px 0 rgb(0 0 0 / 0.05)",
      md: "0 0 6px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 0 0 3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      "lg-b":
        "0 8px 8px 0px rgb(0 0 0 / 0.1), 0 16px 16px 0px rgb(0 0 0 / 0.1)",
      xl: "0 0 0 5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 0 50px -12px rgb(0 0 0 / 0.25)",
      "3xl":
        "0 0 50px -12px rgb(0 0 0 / 0.25), 0 0 150px -12px rgb(0 0 0 / 0.15), 0 0 400px -12px rgb(0 0 0 / 0.15)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "0 0 #0000",
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss"

// Colors and fonts are CSS variables defined in app/globals.css — change tokens there.
const config = {
  future: { hoverOnlyWhenSupported: true },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        sunken: "var(--sunken)",
        ink: "var(--ink)",
        body: "var(--body)",
        muted: "var(--muted)",
        hairline: "var(--hairline)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        capsule: "var(--capsule)",
        "on-capsule": "var(--on-capsule)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        label: ["var(--font-label)", "var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
        frame: "14px",
      },
      boxShadow: {
        card: "var(--shadow-card)",
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
} satisfies Config

export default config

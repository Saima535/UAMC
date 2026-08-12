import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f3f7f2",
        surface: "#ffffff",
        ink: "#102018",
        muted: "#607062",
        primary: "#1f6b4e",
        primaryDark: "#164834",
        accent: "#d7e9dd",
        line: "#d8e3db"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 32, 24, 0.10)"
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top, rgba(31,107,78,0.14), transparent 44%), linear-gradient(180deg, #f8fbf7 0%, #eef5ef 100%)"
      }
    }
  },
  plugins: []
} satisfies Config;

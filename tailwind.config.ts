import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#1E2AD8",
        secondary: "#DEDCFF",
        secondarysecondary: "#C5C1FF",
        accent: "#4088ED",
        text: "#050315",
        background: "#FBFBFE",
      },
    },
  },
  plugins: [],
} satisfies Config;

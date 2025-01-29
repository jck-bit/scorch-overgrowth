import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'space': ['"Space Mono"', 'monospace'],
        'michroma': ['"Michroma"', 'monospace'],
        'orbitron': ['"Orbitron"', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;

const withMT = require("@material-tailwind/react/utils/withMT");
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
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
      fontFamily: {
        sans: ["var(--laxendDecA-font)"],
      },
      zIndex: {
        '-1': -1,
      },
      fontSize:{
        "s": ["11px", "16.5px"]
      }
    },
    // listStyleType: {
    //   none: 'none',
    //   disc: 'disc',
    //   decimal: 'decimal',
    //   square: 'square',
    //   roman: 'upper-roman',
    // }
  },
  darkMode: "class",
  plugins: [nextui()],
});

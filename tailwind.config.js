/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        strongCyan: "hsl( 172, 67%, 45% )",

        // Neutral Colors
        veryDarkCyan: "hsl( 183, 100%, 15% )",
        darkGrayishCyan: "hsl( 186, 14%, 84% )",
        grayishCyan: "hsl( 184, 14%, 56% )",
        lightGrayishCyan: "hsl( 185, 41%, 84% )",
        veryLightGrayishCyan: "hsl( 189, 41%, 97% )",
        white: "hsl( 0, 0%, 100% )"
      },
      fontFamily: {
        spaceMono: [ "Space Mono", "monospace" ]
      },
      fontWeight: {
        spaceMonoBold: "700"
      },
    },
    screens: {
      xs: "390px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}


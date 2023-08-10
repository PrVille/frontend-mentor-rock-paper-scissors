/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scissorsGradientFrom: "hsl(39, 89%, 49%)",
        scissorsGradientTo: "hsl(40, 84%, 53%)",
        paperGradientFrom: "hsl(230, 89%, 62%)",
        paperGradientTo: "hsl(230, 89%, 65%)",
        rockGradientFrom: "hsl(349, 71%, 52%)",
        rockGradientTo: "hsl(349, 70%, 56%)",
        lizardGradientFrom: "hsl(261, 73%, 60%)",
        lizardGradientTo: "hsl(261, 72%, 63%)",
        spockGradientFrom: "hsl(189, 59%, 53%)",
        spockGradientTo: "hsl(189, 58%, 57%)",
        headerOutline: "hsl(217, 16%, 45%)",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
      },
      fontFamily: {
        barlowSemiCondensed: "Barlow Semi Condensed, sans-serif",
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}

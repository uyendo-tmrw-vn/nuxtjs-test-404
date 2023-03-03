/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,scss}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./constants/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "tmrw-yellow": "#ffc557",
        "tmrw-dark-grey": "#231f20",
        "tmrw-neutral-grey": "#74797e",
        "tmrw-works-grey": "#d6d2d1",
        "tmrw-red": "#d5363a",
        "tmrw-red2": "#d5363a",
      },
    },
  },
  plugins: [],
};

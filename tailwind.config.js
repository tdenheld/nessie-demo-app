module.exports = {
  presets: [require("@nessie/web-fundamentals/build/web/tailwind.config")],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        '1-m': '1fr max-content',
        '3-2': '3fr 2fr',
      }
    }
  },
  plugins: [],
}

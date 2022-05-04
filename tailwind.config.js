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
        '1-m-1': '1fr max-content 1fr',
        '1-m-1-m': '1fr max-content 1fr max-content',
        '3-2': '3fr 2fr',
        '2-3': '2fr 3fr',
      },
      animation: {
        'fade-in': 'fade-in 1000ms var(--nes-motion-ease-out) both',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        }
      }
    }
  },
}

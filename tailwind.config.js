const plugin = require('tailwindcss/plugin');

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
      },
      animation: {
        'fade-in': 'fade-in 700ms var(--nes-motion-ease-out) both',
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
  plugins: [
    plugin(({
      addUtilities
    }) => {
      let aDur = {};
      for (let i = 0; i < 32; i++) {
        aDur = {
          [`.a-dur-${i * 100}`]: {
            animationDuration: `${i * 100}ms`,
          }
        };
      }
      addUtilities(aDur);
    })
  ]
}

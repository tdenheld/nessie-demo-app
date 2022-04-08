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
  plugins: [
    plugin(({
      addUtilities
    }) => {
      let ani = {};
      for (let i = 0; i < 32; i++) {
        ani = {
          [`.a-dur-${i * 100}`]: {
            animationDuration: `${i * 100}ms`,
          },
          [`.a-del-${i * 100}`]: {
            animationDelay: `${i * 100}ms`,
          },
        };
      }
      addUtilities(ani);
    })
  ]
}

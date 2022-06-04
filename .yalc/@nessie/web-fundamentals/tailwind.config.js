//this 'broken' path works because the tailwind is copied into the build folder
const tokens = require("@nessie/web-fundamentals/build/web/tokens.json");
const tokensColors = require("@nessie/web-fundamentals/build/web/tokens-colors-css.json");
const tokensColorsPalet = require("@nessie/web-fundamentals/build/web/tokens-colors-palet-css.json");
const plugin = require("tailwindcss/plugin");

/* Filter the colors by property (text, bg, border) so that they
   generate classes for the correct Tailwind section instead of for all. */
const filterRenameKeys = (obj, oldStr, newStr) => {
  const filteredByKey = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      if (key.startsWith(oldStr)) return key.includes(oldStr);
    }));

  const result = Object.entries(filteredByKey).reduce((acc, [key, value]) => {
    const newKey = key.replace(oldStr, newStr);
    return {
      ...acc,
      [newKey]: value,
    };
  }, {});

  return result;
}

module.exports = {
  prefix: "nes-",
  corePlugins: {
    container: false,
    ringColor: false,
    ringWidth: false,
    ringOpacity: false,
    ringOffsetColor: false,
    ringOffsetWidth: false,
  },
  theme: {
    screens: {
      sm: tokens.nesBreakpointSm,
      md: tokens.nesBreakpointMd,
      lg: tokens.nesBreakpointLg,
      xl: tokens.nesBreakpointXl,
    },
    colors: () => ({
      transparent: "transparent",
      current: "currentColor",
      ...tokensColorsPalet,
      ...filterRenameKeys(tokensColors, "form-", "form-"),
      ...filterRenameKeys(tokensColors, "focus-", "focus-"),
      ...filterRenameKeys(tokensColors, "destructive-", "destructive-"),
    }),
    spacing: {
      px: "1px",
      0: "0",
      0.5: "2px",
      1: tokens.nesSpacing1,
      2: tokens.nesSpacing2,
      3: tokens.nesSpacing3,
      4: tokens.nesSpacing4,
      5: tokens.nesSpacing5,
      6: tokens.nesSpacing6,
      8: tokens.nesSpacing8,
      10: tokens.nesSpacing10,
      12: tokens.nesSpacing12,
      14: tokens.nesSpacing14,
      16: tokens.nesSpacing16,
      20: tokens.nesSpacing20,
      24: tokens.nesSpacing24,
      32: tokens.nesSpacing32,
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      ...filterRenameKeys(tokensColors, "bg-", "")
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      ...filterRenameKeys(tokensColors, "border-", ""),
      DEFAULT: tokensColors["border-default"]
    }),
    borderWidth: {
      DEFAULT: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    borderRadius: {
      none: "0px",
      sm: tokens.nesRadiusSm,
      DEFAULT: tokens.nesRadiusMd,
      md: tokens.nesRadiusMd,
      lg: tokens.nesRadiusLg,
      full: tokens.nesRadiusFull,
    },
    boxShadow: {
      DEFAULT: tokens.nesShadowWebSm,
      md: tokens.nesShadowWebMd,
      lg: tokens.nesShadowWebLg,
      navbar: tokens.nesShadowWebNavbar,
      none: "none",
    },
    fontFamily: {
      sans: `${tokens.nesFontFamily}, Helvetica, Arial, sans-serif`,
    },
    fontSize: {
      "2xs": tokens.nesFontSize2xs,
      xs: tokens.nesFontSizeXs,
      sm: tokens.nesFontSizeSm,
      base: tokens.nesFontSizeBase,
      lg: tokens.nesFontSizeLg,
      xl: tokens.nesFontSizeXl,
      "2xl": tokens.nesFontSize2xl,
      "3xl": tokens.nesFontSize3xl,
      "4xl": tokens.nesFontSize4xl,
      "5xl": tokens.nesFontSize5xl,
      "6xl": tokens.nesFontSize6xl,
      "7xl": tokens.nesFontSize7xl,
      "8xl": tokens.nesFontSize8xl,
      "9xl": tokens.nesFontSize9xl,
      "10xl": tokens.nesFontSize10xl,
    },
    fontWeight: {
      normal: tokens.nesFontWeightNormal,
      bold: tokens.nesFontWeightBold,
    },
    letterSpacing: {
      normal: tokens.nesFontTrackingNormal,
      tight: tokens.nesFontTrackingTight,
      heading: "calc(-0.022em + 0.33px)"
    },
    lineHeight: {
      none: tokens.nesFontLeadingNone,
      compressed: tokens.nesFontLeadingCompressed,
      tight: tokens.nesFontLeadingTight,
      normal: tokens.nesFontLeadingNormal,
      relaxed: tokens.nesFontLeadingRelaxed,
      loose: tokens.nesFontLeadingLoose,
      heading: "calc(1.07em + 6px)"
    },
    textColor: (theme) => ({
      ...theme('colors'),
      ...filterRenameKeys(tokensColors, "text-", "")
    }),
    transitionDuration: {
      DEFAULT: tokens.nesMotionDurationDefault,
      200: tokens.nesMotionDurationXs,
      400: tokens.nesMotionDurationMd,
      500: tokens.nesMotionDurationLg,
      700: tokens.nesMotionDurationXl,
      1000: tokens.nesMotionDuration2xl,
      1500: tokens.nesMotionDuration3xl,
    },
    transitionTimingFunction: {
      DEFAULT: tokens.nesMotionEaseDefault,
      linear: "linear",
      in: tokens.nesMotionEaseIn,
      out: tokens.nesMotionEaseOut,
      "in-out": tokens.nesMotionEaseInOut,
      "in-out-expo": tokens.nesMotionEaseInOutExpo,
    },
    outline: {
      none: "none",
    },
    extend: {
      height: {
        240: "240px",
        320: "320px",
        480: "480px",
        640: "640px",
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
        240: "240px",
        320: "320px",
        480: "480px",
        640: "640px",
      }),
      maxWidth: {
        "prose-sm": "48ch",
      },
      zIndex: {
        'modal': '999',
        'navigation': '100',
        'messages': '50',
        'menu': '20',
        'raised': '10',
      },
    },
  },
  plugins: [
    plugin(({
      addComponents,
      addUtilities
    }) => {
      // LAYOUT
      // --------------------------------
      addComponents({
        ".container": {
          "@apply nes-block nes-px-6 sm:nes-px-8 lg:nes-px-16 nes-mx-auto": {},
          maxWidth: "1728px"
        },
        ".container--full": {
          "@apply lg:nes-px-8": {},
          maxWidth: "initial"
        },
        ".container--narrow": {
          maxWidth: `calc(1200px + ${tokens.nesSpacing32})`
        },
        ".section": {
          "@apply nes-block nes-py-10 lg:nes-py-16": {},
        },
        ".gutter": {
          "@apply nes-gap-6 sm:nes-gap-8": {}
        },
        ".heading": {
          "@apply nes-font-bold nes-leading-heading nes-tracking-heading nes-text-heading": {}
        }
      });

      // SHADOWS
      // --------------------------------
      addUtilities({
        /* Used over hero images or banners in
                 combination with light text color */
        ".text-shadow": {
          textShadow: tokens.nesShadowWebText,
        },
        ".no-text-shadow": {
          textShadow: "none",
        },
      });

      // GRADIENTS
      // --------------------------------
      addUtilities({
        // Black to Alpha: used over hero images or banners
        ".gradient-left": {
          backgroundImage: `linear-gradient(80deg, ${tokensColors.black} 20%, ${tokensColors["alpha-black-500"]})`,
        },
        ".gradient-top-left": {
          backgroundImage: `linear-gradient(164deg, ${tokensColors.black} 20%, transparent 90%)`,
        },
        ".gradient-bottom": {
          backgroundImage: `linear-gradient(0deg, ${tokensColors.black} 20%, transparent 80%)`,
        },

        // Full colors
        ".gradient-yellow": {
          backgroundImage: `radial-gradient(80% 50% at 50% 50%, #FFD344 0%, ${tokensColors.yellow} 100%)`,
        },
        ".gradient-light-blue-50": {
          backgroundImage: `radial-gradient(67% 67% at 67% 33%, ${tokensColors["light-blue-50"]} 0%, #DCECFF 100%)`,
        },
      }, ["responsive"]);

      // ALPHA INSETS
      // --------------------------------
      addUtilities({
        // Mainly used for hover or active states applied to box-shadow
        // .01px fixes flickering Chrome bug (https://bit.ly/3abFg3l)
        ".alpha-inset": {
          boxShadow: `inset 0 999px 0 .01px ${tokensColors["alpha-black-100"]}`,
        },
        ".alpha-inset-soft": {
          boxShadow: `inset 0 999px 0 .01px ${tokensColors["alpha-black-50"]}`,
        },
      }, ["hover"]);

      // RING
      // --------------------------------
      addUtilities({
        // Mainly used for focus states
        ".ring": {
          boxShadow: `0 0 0 2px ${tokensColors["focus-default"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-1": {
          boxShadow: `0 0 0 1px ${tokensColors["focus-default"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-center": {
          boxShadow: `0 0 0 1px ${tokensColors["focus-default"]}, inset 0 0 0 1px ${tokensColors["focus-default"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-inset": {
          boxShadow: `inset 0 0 0 2px ${tokensColors["focus-default"]}, ${tokens.nesShadowWebSm}`,
        },

        ".ring-pressed": {
          boxShadow: `0 0 0 2px ${tokensColors["focus-pressed"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-pressed-1": {
          boxShadow: `0 0 0 1px ${tokensColors["focus-pressed"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-pressed-center": {
          boxShadow: `0 0 0 1px ${tokensColors["focus-pressed"]}, inset 0 0 0 1px ${tokensColors["focus-pressed"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-pressed-inset": {
          boxShadow: `inset 0 0 0 2px ${tokensColors["focus-pressed"]}, ${tokens.nesShadowWebSm}`,
        },

        ".ring-light": {
          boxShadow: `0 0 0 2px ${tokensColors["focus-light"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-light-1": {
          boxShadow: `0 0 0 1px ${tokensColors["focus-light"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-light-center": {
          boxShadow: `0 0 0 1px ${tokensColors["focus-light"]}, inset 0 0 0 1px ${tokensColors["focus-light"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-light-inset": {
          boxShadow: `inset 0 0 0 2px ${tokensColors["focus-light"]}, ${tokens.nesShadowWebSm}`,
        },

        ".ring-alert": {
          boxShadow: `0 0 0 2px ${tokensColors["form-error"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-alert-1": {
          boxShadow: `0 0 0 1px ${tokensColors["form-error"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-alert-center": {
          boxShadow: `0 0 0 1px ${tokensColors["form-error"]}, inset 0 0 0 1px ${tokensColors["form-error"]}, ${tokens.nesShadowWebSm}`,
        },
        ".ring-alert-inset": {
          boxShadow: `inset 0 0 0 2px ${tokensColors["form-error"]}, ${tokens.nesShadowWebSm}`,
        },
      }, ["focus-within", "focus"]);
    }),
  ],
};
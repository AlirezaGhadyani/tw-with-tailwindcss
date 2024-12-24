import type { Config } from "tailwindcss";
import {
  mainPallete,
  backgroundSystem,
  neutralScale,
  grayScale,
  redScale,
  transDark,
  transLight,
} from "./tokens/color";
import { gradient } from "./tokens/gradient";
import { breakpointSize } from "./tokens/breakpoint";
import { typography } from "./tokens/typography";
import { global } from "./tokens/global";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        // Main color palette
        white: mainPallete.white,
        black: mainPallete.black,
        red: mainPallete.red,
        blue: mainPallete.blue,
        purple: mainPallete.purple,

        // Background system
        backgroundPrimaryLight: backgroundSystem.primary.light,
        backgroundPrimaryDark: backgroundSystem.primary.dark,
        backgroundSecondaryLight: backgroundSystem.secondary.light,
        backgroundSecondaryDark: backgroundSystem.secondary.dark,
        backgroundTertiary: backgroundSystem.tertiary,
        backgroundQuarternary: backgroundSystem.quarternary,

        // Neutral scale
        neutral100: neutralScale.neutral100,
        neutral200: neutralScale.neutral200,
        neutral300: neutralScale.neutral300,
        neutral400: neutralScale.neutral400,
        neutral500: neutralScale.neutral500,
        neutral600: neutralScale.neutral600,
        neutral700: neutralScale.neutral700,
        neutral800: neutralScale.neutral800,
        neutral900: neutralScale.neutral900,

        // Grayscale
        grey100: grayScale.grey100,
        grey200: grayScale.grey200,
        grey300: grayScale.grey300,
        grey400: grayScale.grey400,
        grey500: grayScale.grey500,
        grey600: grayScale.grey600,
        grey700: grayScale.grey700,
        grey800: grayScale.grey800,
        grey900: grayScale.grey900,

        // Red scale
        red100: redScale.red100,
        red200: redScale.red200,
        red300: redScale.red300,
        red400: redScale.red400,
        red500: redScale.red500,
        red600: redScale.red600,
        red700: redScale.red700,
        red800: redScale.red800,
        red900: redScale.red900,

        // Transparent colors
        transDarkXL: transDark.transDarkXL,
        transDarkL: transDark.transDarkL,
        transDarkM: transDark.transDarkM,
        transDarkS: transDark.transDarkS,
        transDarkXS: transDark.transDarkXS,
        transDarkXXS: transDark.transDarkXXS,
        transLightXL: transLight.transLightXL,
        transLightL: transLight.transLightL,
        transLightM: transLight.transLightM,
        transLightS: transLight.transLightS,
        transLightXS: transLight.transLightXS,
        transLightXXS: transLight.transLightXXS,
      },
      backgroundImage: {
        // Gradients
        blackFromTop: gradient.blackFromTop,
        blackFromBottom: gradient.blackFromBottom,
        blackFromLeft: gradient.blackFromLeft,
        blackFromRight: gradient.blackFromRight,
        transBlack70FromTop: gradient.transBlack70FromTop,
        neuralFromBottom: gradient.neuralFromBottom,
        transNeuralFromBottom: gradient.transNeuralFromBottom,
        transNeuralFromTop: gradient.transNeuralFromTop,
        whiteFromTop: gradient.whiteFromTop,
      },
      screens: {
        // Custom breakpoints
        xs: `${breakpointSize.xs}px`,
        sm: `${breakpointSize.sm}px`,
        md: `${breakpointSize.md}px`,
        lg: `${breakpointSize.lg}px`,
        xl: `${breakpointSize.xl}px`,
        xxl: `${breakpointSize.xxl}px`,
      },
      fontSize: {
        // Typography tokens
        title: typography.title,
        subTitle: typography.subTitle,
        body: typography.body,
        bodySmall: typography.bodySmall,
        caption: typography.caption,
        footNote: typography.footNote,
        tag: typography.tag,
        header1: typography.header1,
        header2: typography.header2,
        header3: typography.header3,
        header4: typography.header4,
        header5: typography.header5,
        header6: typography.header6,
        xl: '1.5rem', // Tailwind's default
      },
      lineHeight: {
        // Global line height
        global: global.lineHeight,
        '1.379': '1.379em', // Custom line heights
        '1.333': '1.333em',
      },
      fontFamily: {
        // Global font (empty string means fallback)
        sans: global.font || 'sans-serif',
      },
      borderRadius: {
        // Global border radius
        DEFAULT: global.borderRadius,
      },
      transitionDuration: {
        // Global transition duration
        DEFAULT: global.transition,
      },
    },
  },
  plugins: [],
};
export default config;

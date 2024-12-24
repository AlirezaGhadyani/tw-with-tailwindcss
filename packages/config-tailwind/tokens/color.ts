export const mainPallete = {
  white: "#ffffff",
  black: "#000000",
  red: "#fd4141",
  blue: "#268fff",
  purple: "#101828",
};

export const backgroundSystem = {
  primary: {
    light: "#c2c2c2",
    dark: mainPallete.black,
  },
  secondary: {
    light: "#dadada",
    dark: "#1c1c1e",
  },
  tertiary: "#2c2c2e",
  quarternary: "#3a3a3c",
};

export const neutralScale = {
  neutral100: "#e4e7eb", // extremely light
  neutral200: "#cbd2d9", // very light
  neutral300: "", // light
  neutral400: "#7b8794", // light middle
  neutral500: "", // middle
  neutral600: "", // dark middle
  neutral700: "#3e4c59", // dark
  neutral800: "#1f2933", // very dark
  neutral900: "#10151a", // extremely dark
};

export const grayScale = {
  grey100: "#e5e5e5", // extremely light
  grey200: "#cccccc", // very light
  grey300: "#b3b3b3", // light
  grey400: "#999999", // light middle
  grey500: "#808080", // middle
  grey600: "#666666", // dark middle
  grey700: "#4d4d4d", // dark
  grey800: "#333333", // very dark
  grey900: "#1a1a1a", // extremely dark
};

export const redScale = {
  red100: "", // extremely light
  red200: "", // very light
  red300: "#e15c5c", // light
  red400: "#de4747", // light middle
  red500: mainPallete.red, // middle
  red600: "#c42e2e", // dark middle
  red700: "#ae2929", // dark
  red800: "", // very dark
  red900: "", // extremely dark
};

// base on : neutral900: "#10151a"
export const transDark = {
  transDarkXL: "rgba(16, 21, 26, 0.9)",
  transDarkL: "rgba(16, 21, 26, 0.7)",
  transDarkM: "rgba(16, 21, 26, 0.5)",
  transDarkS: "rgba(16, 21, 26, 0.2)",
  transDarkXS: "rgba(16, 21, 26, 0.1)",
  transDarkXXS: "rgba(16, 21, 26, 0.05)",
};

// base on : white: "#ffffff"
export const transLight = {
  transLightXL: "rgba(255, 255, 255, 0.9)",
  transLightL: "rgba(255, 255, 255, 0.7)",
  transLightM: "rgba(255, 255, 255, 0.5)",
  transLightS: "rgba(255, 255, 255, 0.2)",
  transLightXS: "rgba(255, 255, 255, 0.1)",
  transLightXXS: "rgba(255, 255, 255, 0.05)",
};

export const color = {
  ...mainPallete,
  ...backgroundSystem,
  ...neutralScale,
  ...grayScale,
  ...redScale,
  ...transDark,
  ...transLight,
};

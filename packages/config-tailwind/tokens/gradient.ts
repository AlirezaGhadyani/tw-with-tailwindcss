import { color } from "./color";

export const gradient = {
  /* Gradient/Pure Black Top Down */
  blackFromTop: `linear-gradient(180deg, ${color.black} 0%, transparent 100%)`,
  /* Gradient/Pure Black Buttom Top */
  blackFromBottom: `linear-gradient(180deg, transparent 0%, ${color.black} 100%)`,
  /* Gradient/Pure Black 3 Step LtR */
  blackFromLeft: `linear-gradient(270deg, transparent 0%, ${color.black} 100%)`,
  /* Gradient/Black Pure 3 Steps RtL */
  blackFromRight: `linear-gradient(270deg, ${color.black} 0%, transparent 100%)`,
  /* Gradient / Pure Transparent from Top */
  transBlack70FromTop: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%)`,

  /* Gradient/Base_Down_Top */
  neuralFromBottom: `linear-gradient(180deg, transparent 0%, ${color.neutral900} 100%)`,
  /* Gradient/Transparent base down */
  transNeuralFromBottom: `linear-gradient(180deg, transparent 0%, ${color.transDarkXL} 100%)`,
  /* Gradient/ Transparent base top */
  /* Gradient/Dark to Zero from Top */
  transNeuralFromTop: `linear-gradient(180deg, ${color.transDarkXL} 0%, transparent 100%)`,

  /* Gradient/ WhiteFromTop */
  whiteFromTop: `linear-gradient(180deg, ${color.white} 0%, transparent 100%)`,
};

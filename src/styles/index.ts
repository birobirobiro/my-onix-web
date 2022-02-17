import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray50: "#EDF3F6",
      gray100: "#B4B8BD",
      gray200: "#C4C4C4",
      gray150: "#747474",
      gray400: "#444D5B",
      gray500: "#323A46",
      gray900: "#131313",
      button: "#242424",
    },
  },
  media: {
    bp1: "(max-width: 700px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),

    marginY: (value) => ({ marginTop: value, marginBottom: value }),

    pa: (value) => ({ padding: value }),
  },
});

import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  "body, button": {
    fontFamily: "'Roboto', sans-serif",
    overflowX: "hidden",
  },
  "h1, h2": {
    fontFamily: "'Poppins', sans-serif",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

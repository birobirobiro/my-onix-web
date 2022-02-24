import { url } from "inspector";
import { keyframes, styled } from "..";

function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), "")
    .trim();
}

const slideCar = keyframes({
  "0%": {
    transform: "translateX(100%)",
  },
  "100%": {
    transform: "translateX(0)",
  },
});

const slideTextOnix = keyframes({
  "0%": {
    transform: "translateY(100%)",
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 0.6,
  },
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: pixelToRem(1255),
  background: "linear-gradient(180deg, #2D343E 0%, #1D2127 100%)",
  clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
  padding: pixelToRem(47, 92, 0),
  minHeight: "100vh",

  "@desktopLG": {
    alignItems: "center",
    clipPath: "polygon(0 0, 100% 0, 84% 100%, 0% 100%)",
  },

  "@mobileLG": {
    padding: pixelToRem(28, 50),
    alignItems: "center",
  },
});

export const Header = styled("header", {
  display: "flex",
  gap: "0.625rem",
  flexDirection: "column",

  "@desktopLG": {
    alignItems: "center",
  },
});

export const LogoContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: pixelToRem(10),

  "@desktopLG": {
    justifyContent: "center",
  },
});

export const HeaderImage = styled("img", {
  width: "3.125rem",
  height: "1rem",

  "@desktopLG": {
    width: pixelToRem(80),
    height: pixelToRem(40),
  },
});

export const TitleHeader = styled("h1", {
  fontSize: pixelToRem(22),
  fontWeight: "600",
  color: "$gray50",
  fontStyle: "italic",

  "@desktopLG": {
    fontSize: pixelToRem(30),
  },
});

export const Content = styled("section", {
  display: "flex",
  flexDirection: "column",
  maxWidth: pixelToRem(450),
  width: "100%",

  "@desktopLG": {
    maxWidth: pixelToRem(550),
    alignItems: "center",
  },
});

export const Description = styled("div", {
  paddingBottom: "3.4375rem",
  display: "flex",
  alignItems: "center",
  fontFamily: "Poppins, sans-serif",
  textAlign: "left",
  maxWidth: pixelToRem(550),
  marginTop: pixelToRem(112),

  "@desktopLG": {
    textAlign: "center",
    maxWidth: pixelToRem(480),
  },

  "@mobileLG": {
    marginTop: pixelToRem(53),
    textAlign: "center",
    maxWidth: pixelToRem(315),
  },
});

export const LightText = styled("p", {
  color: "$gray50",
  fontSize: pixelToRem(26),
  fontWeight: "600",

  "@desktopLG": {
    fontSize: pixelToRem(20),
  },

  "@mobileLG": {
    fontSize: pixelToRem(15),
  },
});

export const Form = styled("form", {
  display: "flex",

  "@desktopLG": {
    flexDirection: "column",
    alignItems: "center",
  },

  "@mobileLG": {
    flexDirection: "row",
    alignItems: "initial",
  },
});

export const Onix = styled("aside", {
  position: "absolute",
  right: 100,
  top: "35vh",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",

  animation: `${slideCar} 1s ease-in-out`,

  "@desktopLG": {
    display: "none",
  },

  "@mobileLG": {
    top: "59vh",
    right: 300,
    width: pixelToRem(100),
    height: pixelToRem(100),
    display: "initial",

    animation: `${slideCar} 0.5s ease-in-out`,
  },
});

export const textOnix = styled("span", {
  fontSize: pixelToRem(96),
  fontWeight: "600",
  background:
    "linear-gradient(94.64deg, rgba(220, 211, 211, 0.27) 17.12%, rgba(62, 50, 50, 0.274427) 48.86%, rgba(0, 0, 0, 0.28) 88.82%)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  opacity: 0.6,
  marginTop: pixelToRem(20),
  position: "absolute",
  zIndex: 1,
  top: 260,
  right: 412,

  "@desktopLG": {
    display: "none",
  },

  animation: `${slideTextOnix} 1s ease-in-out `,
});

export const Input = styled("input", {
  border: "solid 1px $gray150",
  borderRight: "0",
  borderRadius: "5px 0 0 5px",
  width: pixelToRem(350),
  height: pixelToRem(41),
  background: "$gray400 url(images/search.svg) no-repeat scroll 15px 10px",
  paddingLeft: pixelToRem(44),
  outline: "none",
  display: "flex",
  color: "$gray50",

  "&::placeholder": {
    color: "$gray50",
    opacity: 0.5,
  },

  "@desktopLG": {
    border: "solid 1px $gray150",
    borderRadius: pixelToRem(5),
  },

  "@mobileLG": {
    display: "inline-block",
    width: "100%",
    height: pixelToRem(40),
    background:
      "$gray400 url(images/search-mobile.svg) no-repeat scroll 15px 12px",
    paddingLeft: pixelToRem(36),
    borderRight: "0",
    borderRadius: "5px 0 0 5px",
  },
});

export const Button = styled("button", {
  backgroundColor: "$button",
  border: "none",
  width: pixelToRem(100),
  height: pixelToRem(41),
  borderRadius: "0 5px 5px 0",
  fontFamily: "Poppins, sans-serif",
  fontSize: pixelToRem(13),
  fontWeight: "600",
  color: "$gray50",

  "@desktopLG": {
    marginTop: pixelToRem(20),
    width: pixelToRem(350),
  },

  "@mobileLG": {
    backgroundColor: "$gray400",
    border: "solid 1px $gray150",
    borderLeft: "0",
    height: pixelToRem(40),
    padding: pixelToRem(15, 10),
    width: "auto",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 0,
  },
});

export const SearchResult = styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$gray400",
  maxWidth: pixelToRem(494),
  maxHeight: pixelToRem(189),
  borderRadius: pixelToRem(5),
  marginTop: pixelToRem(70),
  pa: pixelToRem(30),
  border: "solid 1px $gray150",

  "@desktopLG": {
    width: "100%",
    maxWidth: pixelToRem(400),
  },

  "@mobileLG": {
    marginTop: pixelToRem(35),
    maxWidth: pixelToRem(300),
  },
});

export const TextSearchResult = styled("p", {
  fontSize: pixelToRem(14),
  fontFamily: "Roboto, sans-serif",
  color: "$gray100",
});

export const InfoText = styled("div", {
  display: "flex",
});

export const TextInfo = styled("p", {
  fontSize: pixelToRem(13),
  fontFamily: "Roboto, sans-serif",
  color: "$gray100",
  paddingTop: pixelToRem(55),

  "@desktopLG": {
    textAlign: "center",
  },

  "@mobileLG": {
    paddingTop: pixelToRem(25),
    color: "$gray150",
  },
});

export const Footer = styled("footer", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: pixelToRem(0, 50),
  backgroundColor: "$gray500",

  "@mobileLG": {
    display: "none",
  },
});

export const Designed = styled("div", {
  display: "flex",
  color: "$gray200",
  gap: pixelToRem(10),
});

export const FooterLogo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: pixelToRem(8),
});

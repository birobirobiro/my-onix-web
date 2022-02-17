import { styled } from "..";

function pixelToRem(...values: number[]) {
  return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), "")
    .trim();
}

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "78.4375rem",
  backgroundColor: "$gray500",
  clipPath: "polygon(0 0, 100% 0%, 75% 100%, 0% 100%)",
  padding: "2.9375rem 5.75rem 0",
  minHeight: "100vh",
});

export const Header = styled("header", {
  display: "flex",
  gap: "0.625rem",
  flexDirection: "column",
});

export const LogoContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: pixelToRem(10),
});

export const HeaderImage = styled("img", {
  width: "3.125rem",
  height: "1rem",
});

export const TitleHeader = styled("h1", {
  fontSize: "1.375rem",
  fontWeight: "600",
  color: "$gray50",
  fontStyle: "italic",
});

export const Content = styled("section", {
  display: "flex",
  flexDirection: "column",
  maxWidth: pixelToRem(450),
  width: "100%",
});

export const Description = styled("div", {
  paddingBottom: "3.4375rem",
  display: "flex",
  alignItems: "center",
  fontFamily: "Poppins, sans-serif",
  textAlign: "left",
  maxWidth: pixelToRem(550),
  marginTop: pixelToRem(112),
});

export const LightText = styled("p", {
  color: "$gray50",
  fontSize: "1.625rem",
  fontWeight: "600",
});

export const Form = styled("form", {
  display: "flex",
});

export const Onix = styled("aside", {
  position: "absolute",
  right: 100,
  top: "35vh",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",

  "@bp1": {
    display: "none",
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

  "@bp1": {
    display: "none",
  },
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
  fontSize: pixelToRem(12),
  fontFamily: "Roboto, sans-serif",
  color: "$gray100",
  paddingTop: pixelToRem(55),
});

export const Footer = styled("footer", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: pixelToRem(0, 50),
  backgroundColor: "$gray500",
});

export const Designed = styled("a", {
  color: "$gray200",
});

export const FooterLogo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: pixelToRem(8),
});

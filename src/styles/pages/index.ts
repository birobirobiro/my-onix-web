import { styled } from "..";

export const Container = styled("div", {
  backgroundColor: "$primary",
  flex: 1,
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
});

export const Logo = styled("div", {
  display: "flex",
});

export const Image = styled("img", {
  width: "6.25rem",
  height: "3.125rem",
  marginRight: "1.25rem",
});

export const Title = styled("h1", {
  color: "$title",
});

export const Input = styled("input", {
  width: "18rem",
  margin: "2rem 0",
});

export const Button = styled("button", {
  border: "none",
  backgroundColor: "$button",
  borderRadius: "1.875rem",
  padding: ".3rem .5rem",
  width: "7rem",
  fontSize: "0.8rem",
  fontWeight: "700",
});

export const Result = styled("section", {
  backgroundColor: "$box",
  width: "18rem",
  height: "10rem",
  marginTop: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "1rem",
  padding: ".5rem",
  fontSize: "0.8rem",
  textAlign: "center",
});

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

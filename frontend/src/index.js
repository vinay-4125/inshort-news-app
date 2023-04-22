import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#0d0d0d",
    },
    fonts: {
      sans: "Inter",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 500,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider theme={darkTheme}>
      <App/>
    </NextUIProvider>
  </React.StrictMode>
);

// import "./App.css";
import Nav from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainWrapper } from "./styles/main-wrapper";
import { DesktopItems, MobileItems } from "./styles/responsive";
import { TopContentWrapper } from "./styles/top-content";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MobileTemp from "./components/MobileTemp";
import News from "./pages/News";
import Favicon from "react-favicon";
import { NextUIProvider, Switch, createTheme } from "@nextui-org/react";
import { useState } from "react";

const App = () => {
  const [disTheme, setDisTheme] = useState();
  const [data, setData] = useState("");
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
  const lightTheme = createTheme({
    type: "light",
    theme: {
      colors: {
        // background: "",
        color: "black",
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
  console.log(disTheme);
  const handleChildData = (childData) => {
    setDisTheme(childData);
    console.log(childData);
  };

  return (
    <NextUIProvider theme={disTheme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Favicon
          iconSize={50}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FPFqbgwK_zLuFEWEDXLzZ7g--~B%2FaD0zOTA7dz02OTA7c209MTthcHBpZD15dGFjaHlvbg--%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen_SG%2FNews%2Fe27%2Finshorts_logo_690x390.png&f=1&nofb=1&ipt=e5fd396da6d51a924231122e5df8b9ef088791679cdca51e67dd76c5676feb28&ipo=images"
        ></Favicon>
        <Nav sendDataToParent={handleChildData} />

        <MainWrapper>
          <DesktopItems>
            <TopContentWrapper />
          </DesktopItems>

          <MobileItems>
            <MobileTemp />
          </MobileItems>

          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/news/:id" element={<News />} />
            <Route path="/topics/:term" element={<Search />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </NextUIProvider>
  );
};

export default App;


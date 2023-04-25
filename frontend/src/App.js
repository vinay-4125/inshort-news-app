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
  return (
    <NextUIProvider theme={disTheme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Favicon
          iconSize={50}
          url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FPFqbgwK_zLuFEWEDXLzZ7g--~B%2FaD0zOTA7dz02OTA7c209MTthcHBpZD15dGFjaHlvbg--%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen_SG%2FNews%2Fe27%2Finshorts_logo_690x390.png&f=1&nofb=1&ipt=e5fd396da6d51a924231122e5df8b9ef088791679cdca51e67dd76c5676feb28&ipo=images"
        ></Favicon>
        <Nav />

        <MainWrapper>
          <DesktopItems>
            <TopContentWrapper />
            <Switch
              checked={false}
              size="lg"
              color="warning"
              onChange={(e) => {
                setDisTheme(e.target.checked);
                // console.log(e.target.checked);
              }}
              iconOn={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              }
              iconOff={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />

          </DesktopItems>

          <MobileItems>
            <Switch
              checked={false}
              size="lg"
              color="warning"
              onChange={(e) => {
                setDisTheme(e.target.checked);
                // console.log(e.target.checked);
              }}
              iconOn={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              }
              iconOff={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            />
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

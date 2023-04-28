import {
  Navbar,
  Text,
  Input,
  Image,
  Container,
  Switch,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { DesktopItems, MobileItems } from "../styles/responsive";
import { useState } from "react";

export default function Nav(props) {
  let navigate = useNavigate();
  let [term, setTerm] = useState();

  const [childData, setChildData] = useState("");

  function search(e) {
    e.preventDefault();
    navigate("/topics/" + term);
  }
  const icon =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FPFqbgwK_zLuFEWEDXLzZ7g--~B%2FaD0zOTA7dz02OTA7c209MTthcHBpZD15dGFjaHlvbg--%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen_SG%2FNews%2Fe27%2Finshorts_logo_690x390.png&f=1&nofb=1&ipt=e5fd396da6d51a924231122e5df8b9ef088791679cdca51e67dd76c5676feb28&ipo=images";

  const handleChange = (e) => {
    const newData = e.target.checked;
    setChildData(newData);
    props.sendDataToParent(newData);
    console.log(newData);
  };
  return (
    <div>
      <Navbar
        variant="floating"
        isCompact
        isBordered
        style={{ position: "fixed" }}
      >
        <Navbar.Brand>
          <MobileItems>
            <Navbar.Toggle aria-label="toggle navigation" />
            {/* <Text b color="inherit" hideIn="xs" onClick={() => navigate("/")}>
              Inshort News App
            </Text> */}
          </MobileItems>
          <Container hideIn={"md"}>
            <Image src={icon} width={20} height={20} alt="" objectFit="cover" />
            <Text b color="inherit" hideIn="xs" onClick={() => navigate("/")}>
              Inshort
            </Text>
          </Container>
        </Navbar.Brand>

        <Navbar.Content hideIn={"md"}>
          <Navbar.Link onClick={() => navigate("/")}>Headlines</Navbar.Link>
          <Navbar.Link onClick={() => navigate("/topics/trending")}>
            Trending
          </Navbar.Link>
          <Navbar.Link onClick={() => navigate("/topics/health")}>
            Health
          </Navbar.Link>
          <Navbar.Link onClick={() => navigate("/topics/science")}>
            Science
          </Navbar.Link>
          <Navbar.Link onClick={() => navigate("/topics/india")}>
            India
          </Navbar.Link>
          <Navbar.Link onClick={() => navigate("/topics/technology")}>
            Technology
          </Navbar.Link>
          <Navbar.Link onClick={() => navigate("/topics/sports")}>
            Sports
          </Navbar.Link>
          <Navbar.Link onClick={() => navigate("/topics/entertainment")}>
            Entertainment
          </Navbar.Link>
        </Navbar.Content>

        <MobileItems>
          <Navbar.Content>
            <Switch
              checked={false}
              size="lg"
              color="warning"
              onChange={(e) => {
                // setDisTheme(e.target.checked);
                handleChange(e);
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
            <form onSubmit={(e) => search(e)} style={{ width: "100%" }}>
              <Input
                clearable
                placeholder="Search..."
                aria-label="Search"
                shadow={false}
                onChange={(e) => setTerm(e.target.value)}
              />
            </form>
          </Navbar.Content>
        </MobileItems>
        <DesktopItems>
          <Navbar.Content>
            <Switch
              checked={false}
              size="lg"
              color="warning"
              onChange={(e) => {
                // setDisTheme(e.target.checked);
                handleChange(e);
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
            <form onSubmit={(e) => search(e)} style={{ width: "100%" }}>
              <Input
                clearable
                placeholder="Search..."
                aria-label="Search"
                shadow={false}
                onChange={(e) => setTerm(e.target.value)}
              />
            </form>
          </Navbar.Content>
        </DesktopItems>

        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <a style={white} href="/">
              <Text>Headlines</Text>
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/trending">
              <Text>Trending</Text>
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/health">
              <Text>Health</Text>
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/science">
              <Text>Science</Text>
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/india">
              <Text>India</Text>
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/technology">
              <Text>Technology</Text>
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/sports">
              <Text>Sports</Text>
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/entertainment">
              <Text>Entertainment</Text>
            </a>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const white = {
  color: "white",
};

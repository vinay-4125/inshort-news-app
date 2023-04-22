import { Navbar, Text, Input, Image, Container } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import { DesktopItems, MobileItems } from "../styles/responsive";
import { useState } from "react";

export default function Nav() {
  let navigate = useNavigate();
  let [term, setTerm] = useState();

  function search(e) {
    e.preventDefault();
    navigate("/topics/" + term);
  }
  const icon =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FPFqbgwK_zLuFEWEDXLzZ7g--~B%2FaD0zOTA7dz02OTA7c209MTthcHBpZD15dGFjaHlvbg--%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen_SG%2FNews%2Fe27%2Finshorts_logo_690x390.png&f=1&nofb=1&ipt=e5fd396da6d51a924231122e5df8b9ef088791679cdca51e67dd76c5676feb28&ipo=images";

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
              Headlines
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/trending">
              Trending
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/health">
              Health
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/science">
              Science
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/india">
              India
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/technology">
              Technology
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/sports">
              Sports
            </a>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <a style={white} href="/topics/entertainment">
              Entertainment
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

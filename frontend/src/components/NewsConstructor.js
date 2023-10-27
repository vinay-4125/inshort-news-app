import { Button, Card, Grid, Image, Text } from "@nextui-org/react";
import { NewsContentWrapper } from "../styles/news-wrapper";
import { DesktopItems, MobileItems } from "../styles/responsive";
import Moment from "react-moment";

export default function NewsConstructor({ item }) {
  return item.map((news, key) => (
    <>
      <NewsContentWrapper key={key}>
        <Card isHoverable variant="bordered" style={newsStyle}>
          <DesktopItems>
            {news.urlToImage ? (
              <Image
                width={320}
                height={180}
                src={news.urlToImage}
                alt="Default Image"
                objectFit="cover"
                draggable="false"
                showSkeleton
              />
            ) : (
              <Image
                width={320}
                height={180}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FPFqbgwK_zLuFEWEDXLzZ7g--~B%2FaD0zOTA7dz02OTA7c209MTthcHBpZD15dGFjaHlvbg--%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen_SG%2FNews%2Fe27%2Finshorts_logo_690x390.png&f=1&nofb=1&ipt=e5fd396da6d51a924231122e5df8b9ef088791679cdca51e67dd76c5676feb28&ipo=images"
                alt="Default Image"
                objectFit="cover"
                draggable="false"
                showSkeleton
              />
            )}
            <Text>
              <h3>{news.title}</h3>
            </Text>
            <Text color="grey">
              <h6>{news.description}</h6>
            </Text>
          </DesktopItems>

          <MobileItems>
            {news.urlToImage ? (
              <Image
                width={320}
                height={180}
                src={news.urlToImage}
                alt="Default Image"
                objectFit="cover"
                draggable="false"
                showSkeleton
              />
            ) : (
              <Image
                width={320}
                height={180}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.yimg.com%2Fuu%2Fapi%2Fres%2F1.2%2FPFqbgwK_zLuFEWEDXLzZ7g--~B%2FaD0zOTA7dz02OTA7c209MTthcHBpZD15dGFjaHlvbg--%2Fhttp%3A%2F%2Fmedia.zenfs.com%2Fen_SG%2FNews%2Fe27%2Finshorts_logo_690x390.png&f=1&nofb=1&ipt=e5fd396da6d51a924231122e5df8b9ef088791679cdca51e67dd76c5676feb28&ipo=images"
                alt="Default Image"
                objectFit="cover"
                draggable="false"
                showSkeleton
              />
            )}
            <Text color="white">
              <h3>{news.title}</h3>
            </Text>
            <Text color="grey">
              <h6>{news.description}</h6>
            </Text>
          </MobileItems>
          <DesktopItems>
            <Grid.Container gap={2}>
              <Grid xs={9}>
                <div>
                  <Text
                    css={{
                      textGradient: "45deg, $red600 -20%, $pink600 100%",
                    }}
                    weight="bold"
                  >
                    {news.sourceName}
                  </Text>
                  <Text size={"$sm"} color="gray">
                    <p>Source - {news.author}</p>
                    {/* {moment(news.createdAt).format("YYYY/MM/D")} */}
                    {/* <br /> */}
                    <Moment fromNow>{news?.publishedAt}</Moment>
                  </Text>
                </div>
              </Grid>
              <Grid xs={3}>
                <Button
                  size={"lg"}
                  auto
                  onClick={() => window.open(news.url)}
                  color={"gradient"}
                >
                  Read Post
                </Button>
              </Grid>
            </Grid.Container>
          </DesktopItems>

          <MobileItems>
            <Grid.Container gap={2}>
              <Grid xs={6}>
                <div>
                  <Text
                    size={"$sm"}
                    css={{
                      textGradient: "45deg, $red600 -20%, $pink600 100%",
                    }}
                    weight="bold"
                  >
                    {news.sourceName}
                  </Text>
                  <Text size={"$sm"} color="gray">
                    <p>Source - {news.author}</p>
                    {/* {moment(news.createdAt).format("YYYY/MM/D")} */}
                    <Moment fromNow>{news?.publishedAt}</Moment>
                  </Text>
                </div>
              </Grid>
              <Grid xs={6}>
                <Button
                  style={{ marginTop: "10px" }}
                  auto
                  onClick={() => window.open(news.url)}
                  color={"gradient"}
                >
                  Read Post
                </Button>
              </Grid>
            </Grid.Container>
          </MobileItems>
        </Card>
      </NewsContentWrapper>
    </>
  ));
}

const newsStyle = {
  // background: "#050505",
  padding: "2rem",
  marginTop: "1.5rem",
  marginBottom: "1.5rem",
};

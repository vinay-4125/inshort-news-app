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
            <Image
              width={320}
              height={180}
              src={news.imageUrl}
              alt="Default Image"
              objectFit="cover"
              draggable="false"
              showSkeleton
            />
            <Text>
              <h3>{news.title}</h3>
            </Text>
            <Text color="grey">
              <h6>{news.content}</h6>
            </Text>
          </DesktopItems>

          <MobileItems>
            <Image
              width={320}
              height={180}
              src={news.imageUrl}
              alt="Default Image"
              objectFit="cover"
              draggable="false"
              showSkeleton
            />
            <Text color="white">
              <h3>{news.title}</h3>
            </Text>
            <Text color="grey">
              <h6>{news.content}</h6>
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
                    <p>Report by -{news.authorName}</p>
                    {/* {moment(news.createdAt).format("YYYY/MM/D")} */}
                    {/* <br /> */}
                    <Moment fromNow>{news?.createdAt}</Moment>
                  </Text>
                </div>
              </Grid>
              <Grid xs={3}>
                <Button
                  size={"lg"}
                  auto
                  onClick={() => window.open(news.sourceUrl)}
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
                    <p>Report by -{news.authorName}</p>
                    {/* {moment(news.createdAt).format("YYYY/MM/D")} */}
                    <Moment fromNow>{news?.createdAt}</Moment>
                  </Text>
                </div>
              </Grid>
              <Grid xs={6}>
                <Button
                  style={{ marginTop: "10px" }}
                  auto
                  onClick={() => window.open(news.sourceUrl)}
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

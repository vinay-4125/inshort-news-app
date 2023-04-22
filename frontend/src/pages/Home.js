import { useEffect, useState } from "react";
import { Button, Grid, Loading, Pagination } from "@nextui-org/react";
import NewsConstructor from "../components/NewsConstructor";

import NewsService from "../services/news.service";

import {
  LoadWrapper,
  NewsWrapper,
  PaginationWrapper,
} from "../styles/news-wrapper";
// import MobileTemp from "../components/MobileTemp";

const Home = () => {
  let [news, setNews] = useState();

  useEffect(() => {
    fetchNews(0);
  }, []);
  const handleChange = (page) => {
    fetchNews(page);
    window.scrollTo(0, 0);
  };

  const fetchNews = async (page) => {
    try {
      let res = await NewsService.topStories(page);
      setNews(res);
      // console.log(page);
      // console.log("res.data", res);
    } catch (e) {
      console.log(e);
      setNews(null);
    }
  };

  return (
    <div>
      <NewsWrapper>
        <div>
          {/* <Container
            gap={4}
            css={{ d: "flex", flexWrap: "nowrap", zIndex: 1 }}
            HideIn="smMax"
          >
            <Spacer x={1} />
            <Tooltip
              content={"Reading Today's Headlines"}
              trigger="hover"
              color="primary"
            >
              <Button auto flat color="primary">
                <Text color="white">HeadLines</Text>
              </Button>
            </Tooltip>
          </Container> */}
        </div>
        <div>
          {/* <Grid.Container gap={2} justify="center">
            <Grid xs={1}>
              <Button
                bordered
                color="gradient"
                style={{ cursor: "unset" }}
                auto
              >
                HeadLines
              </Button>
            </Grid>
            <Grid xs={4}>

              <MobileTemp />
            </Grid>
          </Grid.Container> */}
        </div>
        {news ? (
          <>
            <NewsConstructor item={news} />
            <PaginationWrapper>
              <Pagination
                total={10}
                initialPage={1}
                onChange={(page) => handleChange(page)}
              />
            </PaginationWrapper>
          </>
        ) : (
          <>
            <LoadWrapper>
              <Loading type="spinner" size={"xl"} />
            </LoadWrapper>
          </>
        )}
      </NewsWrapper>
    </div>
  );
};

export default Home;

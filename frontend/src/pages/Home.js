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

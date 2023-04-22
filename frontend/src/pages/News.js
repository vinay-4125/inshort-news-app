import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsConstructor from "../components/NewsConstructor";

import NewsService from "../services/news.service";

import { NewsWrapper, LoadWrapper } from "../styles/news-wrapper";
import { Loading } from "@nextui-org/react";

const News = () => {
  let { id } = useParams();
  let [news, setNews] = useState();

  useEffect(() => {
    setNews(null);
    fetchNews(id);
  }, [id]);

  async function fetchNews() {
    try {
      let res = await NewsService.topStories();
      setNews(res);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <NewsWrapper>
        {news ? (
          <NewsConstructor item={news} />
        ) : (
          <LoadWrapper>
            <Loading type="spinner" size={"xl"} />
          </LoadWrapper>
        )}
      </NewsWrapper>
    </div>
  );
};

export default News;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loading, Pagination } from "@nextui-org/react";
import NewsConstructor from "../components/NewsConstructor";
import {
  NewsWrapper,
  LoadWrapper,
  PaginationWrapper,
} from "../styles/news-wrapper";
import NewsService from "../services/news.service";

const Search = () => {
  let { term } = useParams();
  let [news, setNews] = useState();

  useEffect(() => {
    fetchNews(term);
  }, [term]);
  const handleChange = (page) => {
    fetchNews(term, page);
    window.scrollTo(0, 0);
  };

  const fetchNews = async (term, page) => {
    try {
      let res = await NewsService.topic(term, page);
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
          <LoadWrapper>
            <Loading type="spinner" size={"xl"} />
          </LoadWrapper>
        )}
      </NewsWrapper>
    </div>
  );
};

export default Search;

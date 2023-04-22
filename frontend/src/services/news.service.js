import axios from "axios";
import URL from "./url";
const url = "http://localhost:5000";
//https://inshorts.me/news/all?offset=0&limit=10
const NewsService = {
  topStories: async (id = 0) => {
    // const res = await axios.get(URL + `/all?offset=${0}&limit=${10}`);
    const res = await axios.get(url + "/all/" + id, {
      id,
    });
    const data = res.data.data.articles;
    // console.log(data);
    return data;
  },

  search: async (term, id = 0) => {
    // const res = await axios.get(
    //   URL + `/search?query=${term}&offset=${0}&limit=${10}`
    // );
    const res = await axios.get(url + "/search/" + term + "/" + id, {
      term,
      id,
    });
    const giveData = res.data.data.articles;
    console.log(giveData);
    return giveData;
  },

  topic: async (term, id = 0) => {
    const res = await axios.get(url + "/topic" / +term + "/" + id, {
      term,
      id,
    });
    const data = res.data.data.articles;
    return data;
  },

  page: async (id) => {
    const res = await axios.get(url + "/all/" + id, {
      id,
    });
    const data = res.data;
    console.log(data);
    return data;
  },
};

export default NewsService;

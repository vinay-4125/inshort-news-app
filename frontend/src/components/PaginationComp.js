// import { Pagination } from "@nextui-org/react";
// import React, { useEffect, useState } from "react";
// import NewsService from "../services/news.service";

// const PaginationComp = () => {
//   let [news, setNews] = useState();
//   const [id,setId] =

//   useEffect(() => {
//     setNews(null);
//     fetchNews();
//   }, []);

//   const fetchNews = async (id) => {
//     try {
//       let res = await NewsService.page(id);
//       setNews(res);
//       // console.log("res.data", res);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <Pagination total={10} initialPage={1} />
//     </div>
//   );
// };

// export default PaginationComp;

import React from "react";
import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";

const newsPage = () => {
  //   console.log(DUMMY_NEWS);

  return (
    <>
      <div id="newsPage">
        <h1>News Page</h1>
        <NewsList news={DUMMY_NEWS} />
      </div>
    </>
  );
};

export default newsPage;

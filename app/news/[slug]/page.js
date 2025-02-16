import React from "react";
import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

const page = ({ params }) => {
  const newSlug = params.slug;
  const newsId = DUMMY_NEWS.find((news) => news.slug === newSlug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsId.image}`} alt={newsId.title} />
        <h1>{newsId.title}</h1>
        <time dateTime={newsId.date}> {newsId.date}</time>
      </header>
      <p>{newsId.content}</p>
    </article>
  );
};

export default page;

import React from "react";
import LastArticlesBox from "./LastArticlesBox";
const posts = [
  {id: 1, title: "Статья 1", shortDescription: "Что то про фронтенд 1"},
  {id: 2, title: "Статья 2", shortDescription: "Что то про фронтенд 2"},
  {id: 3, title: "Статья 3", shortDescription: "Что то про фронтенд 3"},
  {id: 4, title: "Статья 4", shortDescription: "Что то про фронтенд 4"},
  {id: 5, title: "Статья 1", shortDescription: "Что то про фронтенд 5"},
  {id: 6, title: "Статья 2", shortDescription: "Что то про фронтенд 6"},
  {id: 7, title: "Статья 3", shortDescription: "Что то про фронтенд 7"},
  {id: 8, title: "Статья 4", shortDescription: "Что то про фронтенд 8"}
];

const Articles = () => (
  <div className="content-page">
    <h1>Статьи</h1>
    <LastArticlesBox posts={posts} />
  </div>
);

export default Articles;

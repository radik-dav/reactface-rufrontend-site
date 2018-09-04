import React from "react";
import { Link } from "react-router-dom";
import LastArticlesBox from "./LastArticlesBox";

const posts = [
  { id: 1, title: "Статья 1", shortDescription: "Что то про фронтенд 1" },
  { id: 2, title: "Статья 2", shortDescription: "Что то про фронтенд 2" },
  { id: 3, title: "Статья 3", shortDescription: "Что то про фронтенд 3" },
  { id: 4, title: "Статья 4", shortDescription: "Что то про фронтенд 4" }
];

const Home = () => (
  <div>
    <h1>Сайт о фронтенде</h1>
    <LastArticlesBox posts={posts} />
  </div>
);

export default Home;

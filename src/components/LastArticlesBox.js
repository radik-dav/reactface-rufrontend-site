import React from "react";
import { Link } from "react-router-dom";

// This LastArticles Component
function LastArticlesBox(props) {
  return (
    <div>
      {props.posts.map(c => (
        <div key={c.id}>
          <Link to="#">
            <img src="" />
          </Link>
          <h4>{c.title}</h4>
          <div className="">{c.shortDescription}</div>
        </div>
      ))}
    </div>
  );
}

export default LastArticlesBox;

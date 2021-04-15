import React, { useState, useEffect } from "react";
import { getArticleById } from "../../modules/ArticleManager";

import "./ArticleSpotlight.css";

export const ArticleSpotlight = ({articleId}) => {
  const [article, setArticle] = useState({});
  

  useEffect(() => {
    getArticleById(articleId).then(article => {
      setArticle(article);
    });
  }, [articleId]);

  return (
    <div className="article-spotlight">
      
      <div>
        <h4>{article.title}</h4>
        <div><img className="postImage" src={article.image} alt="article image"/></div>
        <p>{article.date}</p>
        <p>{article.synopsis}</p>
        <a href = {article.url}>{article.url}
         </a>
      </div>
    </div>
  );
};
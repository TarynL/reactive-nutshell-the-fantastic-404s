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
        <p>{article.synopsis}</p>
        <a href = {article.url}>{article.url}
         
          </a>
      </div>
    </div>
  );
};
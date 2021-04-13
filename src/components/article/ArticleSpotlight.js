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
      <img src={require('../article/fantastic.jpeg')} alt="FantasticFour" />
      <div>
        <h3>{article.title}</h3>
        <p>{article.synopsis}</p>
        <p>{article.url}</p>
      </div>
    </div>
  );
};
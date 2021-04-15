import React, { useState, useEffect} from 'react';
import {ArticleCard} from './ArticleCard';
import {getAllArticles, deleteArticle}  from '../../modules/ArticleManager';
import {useHistory} from 'react-router-dom';

export const ArticleList = () => {

    const [articles, setArticles] = useState([]);
    const history = useHistory();

    const getArticles = () => {
        return getAllArticles()
        .then(articlesFromAPI => {
            setArticles(articlesFromAPI)
        });
    };

    useEffect (() => {
        getArticles();
    }, []);

    const handleDeleteArticle = (id) => {
        deleteArticle(id)
        .then(() => getAllArticles()
        .then(setArticles));
    };

    return (
        <>
         <section className="section-content">
        <button type="button"
          className="button"
          onClick={() => { history.push("/articles/create") }}>
          Add Article
        </button>
      </section>

      <div className="container-cards">
        {articles.map(article =>
          <ArticleCard
            key={article.id}
            article={article}
            handleDeleteArticle={handleDeleteArticle} />)}
      </div>
        
        </>
    )
}
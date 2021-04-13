import React from 'react';
import "./ArticleCard.css"
import { useHistory } from "react-router-dom";

export const ArticleCard = ({ article, handleDeleteArticle }) => {
    const history = useHistory();

    return (
        <div className="card">
            <div className="card-content">

                <h3>Article Title: <span className="card-title">
                    {article.title}
                </span></h3>
                <p>Date: {article.date}</p>
                <p>Synopsis: {article.synopsis}</p>
                <p>URL: {article.url}</p>

                <button type="button"
                    onClick={() => history.push(`/articles/${article.id}/edit`)}>
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>

            </div>
        </div>
    )
}
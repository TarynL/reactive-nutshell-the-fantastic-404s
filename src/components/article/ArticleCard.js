import React from 'react';
import "./ArticleCard.css"
import { Link, useHistory } from "react-router-dom";

export const ArticleCard = ({ article }) => {
    const history = useHistory();

    return (
        <div className="card">
            <div className="card-content">

                <h3>Article Title: <span className="card-title">
                    {article.title}
                </span></h3>
                <p>Synopsis: {article.synopsis}</p>
                <p>URL: {article.url}</p>
            </div>
        </div>
    )
}
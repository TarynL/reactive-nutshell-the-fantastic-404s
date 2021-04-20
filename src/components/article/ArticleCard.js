import React from 'react';
import "./ArticleCard.css"
import { useHistory } from "react-router-dom";

export const ArticleCard = ({ article, handleDeleteArticle, loggedInUser }) => {
    const history = useHistory();

    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(article.timestamp)
    return (
        <>
            {loggedInUser === article.userId ?

                <div className="card">
                    <div className="card-content">

                        <h3>Title: <span className="card-title">
                            {article.title}
                        </span></h3>
                        <p>Date: {date}</p>
                        <p>Synopsis: {article.synopsis}</p>
                        <a href={article.url}>URL: {article.url}</a>
                        <div>
                            <button type="button"
                                onClick={() => history.push(`/articles/${article.id}/edit`)}>
                                Edit
                                 </button>
                            <button type="button" onClick={() => handleDeleteArticle(article.id)}>Delete</button>
                        </div>
                    </div>
                </div> :

                <div className="card-friend">
                    <div className="card-content">

                        <h3>Article Title: <span className="card-title">
                            {article.title}
                        </span></h3>
                        <p>Date: {date}</p>
                        <p>Synopsis: {article.synopsis}</p>
                        <p>Link: <a href={article.url}> {article.url}</a></p>
                    </div>
                </div>
            }
        </>
    )

}
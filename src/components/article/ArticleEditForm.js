import React, { useState, useEffect } from "react";
import { updateArticle, getArticleById } from "../../modules/ArticleManager"
import "./ArticleCard.css";
import { useHistory, useParams } from 'react-router-dom';

export const ArticleEditForm = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const { articleId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...article };

        stateToChange[evt.target.id] = evt.target.value
        setArticle(stateToChange);
    };

    const updateExistingArticle = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedArticle = {
            id: articleId,
            date: article.date,
            title: article.title,
            synopsis: article.synopsis,
            image: article.image,
            url: article.url
        };

        updateArticle(editedArticle)
            .then(() => history.push("/articles"))
    }

    useEffect(() => {
        getArticleById(articleId)
            .then(article => {
                setArticle(article);
                setIsLoading(false);
            });
    }, []);

    return (

        <>
            <form>
                <fieldset>

                    <div className="formgrid">

                        <label type="date" htmlFor="date">Date: </label>
                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={article.date}
                        />

                        <label htmlFor="title">Article Title: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="title"
                            value={article.title}
                        />



                        <label htmlFor="synopsis">Synopsis: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="synopsis"
                            value={article.synopsis}
                        />

                        <label htmlFor="url">URL: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="url"
                            value={article.url}

                        />

                        <label htmlFor="image">Image: </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="image"
                            value={article.image}

                        />

                    </div>

                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingArticle}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}
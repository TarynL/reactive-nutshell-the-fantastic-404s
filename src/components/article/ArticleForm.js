import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {addArticle} from '../../modules/ArticleManager';
import './ArticleCard.css';

export const ArticleForm = () => {
    const [article, setArticle] = useState({
        title: "",
        date: "",
        synopsis: "",
        url: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newArticle = {...article}
        newArticle[event.target.id] = event.target.value
        setArticle(newArticle)
    }

    const handleClickSaveArticle = (event) => {
        event.preventDefault()
        addArticle(article)
        .then(() => history.push("./articles"))
    }

    return (
        <form className="articleForm">
            <h2 className="articleForm__title">New Article</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="title">Article Title:</label>
					<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article title" value={article.title} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="date">Article Date:</label>
					<input type="shortdate" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="article date" value={article.date} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="synopsis">Article Synopsis:</label>
					<input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article synopsis" value={article.synopsis} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="url">Article URL:</label>
					<input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article URL" value={article.url} />
				</div>
			</fieldset>

            <fieldset>
				<div className="form-group">
					<label htmlFor="url">Article Image:</label>
					<input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article URL" value={article.image} />
				</div>
			</fieldset>

            <button className="button btn-primary"
				onClick={handleClickSaveArticle}>
				Save Article
          </button>
        </form>
    )
}
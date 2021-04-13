import React, { useState, useEffect} from 'react';
import {ArticleCard} from './ArticleCard';
import {getAllArticles, deleteArticle}  from '../../modules/ArticleManager';
import {useHistory} from 'react-router-dom';

export const ArticleList = () => {

    const [article, setArticles] = useState([]);
    const history = useHistory();

    const getArticles = () => {
        return getAllArticles()
        .then(articles => {
            setArticles(articles)
        });
    };

    useEffect (() => {
        getArticles();
    }, []);

    const handleDeleteArticle = (id) => {
        handleDeleteArticle(id)
        .then(() => getAllArticles()
        .then(setArticles));
    };

    return (
        <>
    )
}
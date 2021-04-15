import React, { useState, useEffect} from 'react';
import {ArticleCard} from './ArticleCard';
import {getAllArticles, deleteArticle, getArticlesByUserId}  from '../../modules/ArticleManager';
import {useHistory} from 'react-router-dom';
import { getAllFriends, getFriendsById } from '../../modules/FriendManager';



export const ArticleList = () => {
  

    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    
    const [friendArray, setFriendArray] = useState([]);
    const [articles, setArticles] = useState([]);
    const history = useHistory();
    
    const getFriends = () => {
      return getAllFriends(currentUserId).then(friendsFromAPI => {setFriendArray(friendsFromAPI)})
    }
    useEffect (() => {
      getFriends();
    }, [])
    
    
   I need to loop over friendArray, and call getArticlesByUserId for each 

    // // let articleArray = []
    // // const createAllArticlesArray = () => { 
    //   const friendUserIds = friendArray.map(friend => {return (friend.userId)})
    //   friendUserIds.push(currentUserId)
     
   

    // const prepareArticles = () => {
    //   let newArray = []
    //   return friendUserIds.forEach(friend => {
    //     getArticlesByUserId(friend).then(result => {return result})
    //   })
      
    // }
    // useEffect (() => {
    //   prepareArticles()
    //   console.log(prepareArticles())
    // }, []);

    //   const combinedArray = friendUserId.concat(currentUserId)
    //   console.log(combinedArray)

    //   let newArray = combinedArray.map(user => {getAllArticles(user)
    // .then(result => { console.log(result) 
    //   return result})
    //   .then()
    // })};
    // createAllArticlesArray()
    // console.log(newArray)


    // return (articleArray.push(result)) 


    const getArticles = () => {
      return getArticlesByUserId(currentUserId)
       
      .then(articlesFromAPI => {
        setArticles(articlesFromAPI)
      })}
    
    
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
          className="btn"
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
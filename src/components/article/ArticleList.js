import React, { useState, useEffect} from 'react';
import {ArticleCard} from './ArticleCard';
import {getAllArticles, deleteArticle, getArticlesByUserId}  from '../../modules/ArticleManager';
import {useHistory} from 'react-router-dom';
import { getAllFriends, getFriendsById } from '../../modules/FriendManager';



export const ArticleList = () => {
  

  //   const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))
    
    const [friendArray, setFriendArray] = useState([]);
  //   const [articles, setArticles] = useState([]);
  //   const history = useHistory();
  const loggedInUser = JSON.parse(sessionStorage.getItem("nutshell_user"))
    
    const getFriends = () => {
      return getAllFriends(loggedInUser).then(friendsFromAPI => {setFriendArray(friendsFromAPI)})
    }
    useEffect (() => {
      getFriends();
    }, [])
    

    const friendUserIds = friendArray.map(friend => {return (friend.userId)})    
    const combinedArray = friendUserIds.concat(loggedInUser)
    console.log(combinedArray)


    // await Promise.all(
    //   combinedArray.map(async (id) => {
    //     const response = await getArticlesByUserId(id)
    //     const todo = await response.json()
    //     console.log(todo)
    //   })
    // )

  const [articles, setArticles] = useState([]);
  const history = useHistory();
  
 
  const getArticles = () => {
    const urlArray = combinedArray.map(userId => {
      return getArticlesByUserId(userId) })
        let newArticlesArray = Promise.all(urlArray).then(responses => {
         responses.forEach(response => response.map(article => {console.log(article)}))
        })
        
      }
      
      
        // const finalArticleArray = newArticlesArray.forEach(array => array.map(article => {return article}))}
        
      
  
    

  useEffect(() => {
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
      handleDeleteArticle={handleDeleteArticle}
      loggedInUser={loggedInUser} />).reverse()}
      </div>

    </>
  )}
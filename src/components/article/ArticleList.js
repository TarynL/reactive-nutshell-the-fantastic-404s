import React, { useState, useEffect} from 'react';
import {ArticleCard} from './ArticleCard';
import {getAllArticles, deleteArticle, getArticlesByUserId}  from '../../modules/ArticleManager';
import {useHistory} from 'react-router-dom';
import { getAllFriends, getFriendsById } from '../../modules/FriendManager';



export const ArticleList = () => {
  let [variable, setVariable] = useState([])
  let [newArray, setNewArray] = useState([])
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
  
  const urlArray = combinedArray.map(userId => {
    return getArticlesByUserId(userId) })
 
  const getArticles = () => {
        Promise.all(urlArray).then(
          response => 
            setVariable(response)
        )
        
        }
        
      
      
      
        // const finalArticleArray = newArticlesArray.forEach(array => array.map(article => {return article}))}
        
      
        useEffect(() => {
          getArticles()
          
          }, []);
        
        useEffect(() => {
    // setNewArray(newArray => [...newArray, variable])
  
    let artArr = []
    variable.map(arr => {arr.forEach(obj => {artArr.push(obj)})})
   console.log(artArr, "array of articles")
    setArticles(artArr)
    console.log(articles, "state of articles")
  }, [variable]);


  

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
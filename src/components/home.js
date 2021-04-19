import React, { useState, useEffect } from "react";
import { TaskSpotlight } from "../components/tasks/taskSpotlight"
import { getRandomId } from "../modules/ArticleManager";
import { getTaskId } from "../modules/TaskManager";
import "./home.css";
import { ArticleSpotlight } from "../components/article/ArticleSpotlight";
import { MessageList } from "../components/publicMessage/messageList";

export const Dashboard = () => {
  const [taskSpotlightId, setSpotlightId] = useState(0);
  const [articleSpotlightId, setArticleId] = useState(0);


  const refreshSpotlightTask = () => {
    getTaskId().then(setSpotlightId);
  };

  const nextSpotlightArticle = () => {
    getRandomId().then(setArticleId);
  };

  useEffect(() => {
    refreshSpotlightTask();
  }, []);

  useEffect(() => {
    nextSpotlightArticle();
  }, []);


  return (
    <>
    <div className="grid-container">
      <div className="item1 title"><h1>Welcome to the 404</h1></div>
        <div className="item2 Highlight">
          <h3 className="taskHighlight">Upcoming Task</h3>
          {taskSpotlightId && <TaskSpotlight taskId={taskSpotlightId} />}
          <button onClick={refreshSpotlightTask}>Next</button>
        </div>

        <div className="item3 articleHighlight">
          <h3 className="newsArticle">News Article</h3>
          {articleSpotlightId && <ArticleSpotlight articleId={articleSpotlightId} />}
          <button onClick={nextSpotlightArticle}>Next</button>
        </div>

        <div className="item4 messageBoard">
          <h3 className="message">Message Board</h3>
          <MessageList />
        </div>
      </div>
      </>
  );
};
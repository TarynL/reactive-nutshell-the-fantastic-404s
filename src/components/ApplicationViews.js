import React from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./friends/FriendList"
import { ArticleList } from "./article/ArticleList";
import {ArticleForm} from "./article/ArticleForm";
import {ArticleEditForm} from "./article/ArticleEditForm";
import { TaskList } from "./tasks/taskList";
import { TaskForm } from "./tasks/taskForm";
import { TaskEditForm } from "./tasks/taskEditForm"
import { Dashboard } from "./home"
import { GetStatesForSelect } from "../modules/StateCodeManager";

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
        <Dashboard />
      </Route>
      <Route path="/friends">
        {/* Render the component for list of friends */}
        <FriendList />
      </Route>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route exact path="/articles">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route exact path="/tasks">
        {/* Render the component for the user's tasks */}
        <TaskList />
      </Route>
      <Route path="/tasks/create">
        <TaskForm />
      </Route>
      <Route path="/tasks/:taskId(\d+)/edit">
        <TaskEditForm />
      </Route>
      <Route path="/events">
        //TODO: replace with events from JSON server
        <GetStatesForSelect />
      </Route>

      <Route exact path="/articles">
        <ArticleList />
      </Route>

      <Route path="/articles/create">
        <ArticleForm />
      </Route>

      <Route path="/articles/:articleId(\d+)/edit">
        <ArticleEditForm />
      </Route>
    </>
  )
}

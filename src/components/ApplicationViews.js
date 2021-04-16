import React from "react"
import { Route } from "react-router-dom"
import { FriendList } from "./friends/FriendList"
import { ArticleList } from "./article/ArticleList";
import { ArticleForm } from "./article/ArticleForm";
import { ArticleEditForm } from "./article/ArticleEditForm";
import { TaskList } from "./tasks/taskList";
import { TaskForm } from "./tasks/taskForm";
import { TaskEditForm } from "./tasks/taskEditForm"
import { Dashboard } from "./home"
import { MessageList } from "./message/MessageList";
import { GetStatesForSelect } from "./events/EventEntryForm";
import { EventList } from "./events/EventList"
import { MessageForm } from "./message/MessageForm";
import {PrivateMessageEditForm} from "./message/MessageEditForm"
import { PublicMessageForm } from "./publicMessage/messageForm"
import { PublicMessageEditForm } from "./publicMessage/messageEditForm"
import { EditEvent } from "./events/EditEvent"
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
      <Route exact path="/messages">
        <MessageList />
      </Route>
      <Route exact path="/messages/create">
        <MessageForm />
      </Route>
      <Route path="/messages/:messageId(\d+)/edit">
        <PrivateMessageEditForm />
      </Route>
      <Route path="/messages/public/create">
        <PublicMessageForm />
      </Route>
      <Route path="/messages/public/:messageId(\d+)/edit">
        <PublicMessageEditForm />
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
      <Route exact path="/events">
        <EventList />
      </Route>
      <Route path="/events/create">
        <GetStatesForSelect />
      </Route>
      <Route path="/events/:eventId(\d+)/edit">
        <EditEvent />
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

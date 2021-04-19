import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import "../home.css";


export const PublicMessageCard = ({ message, handleDeleteMessage}) => {
  const currentUserId = JSON.parse(sessionStorage.getItem("nutshell_user"))


  return (
    <div className="card">
      <div className="card-content">
        <p className="card-taskName"> Message: {message.message}</p>
        <p>Sender: {message.user.name}</p>

        {message.userId === currentUserId ?
        <div className="buttonBox">
        <Link to={`/messages/public/${message.id}/edit`}>
          <button type="button" className="pmButton">Edit</button>
          </Link>
        <button type="button" className="pmButton" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
        </div>
        : null} 

      </div>
    </div>
  );
}
import React from "react"
import { Link } from "react-router-dom";


export const PublicMessageCard = ({ message, handleDeleteMessage}) => {
  let currentUserId = JSON.parse(sessionStorage.getItem("nutshell_user"))
  return (
    <div className="card">
      <div className="card-content">
        <p className="card-taskName"> Message: {message.message}</p>
        <p>Sender: {message.user?.name}</p>

        {message.receiverId === currentUserId ?
        <>
        <Link to={`/messages/public/${message.id}/edit`}>
          <button type="button">Edit</button>
          </Link>
        <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
        </>
        : null} 

      </div>
    </div>
  );
}
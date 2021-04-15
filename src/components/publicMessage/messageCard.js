import React from "react"
import { Link } from "react-router-dom";


export const PublicMessageCard = ({ message, handleDeleteMessage}) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="card-taskName"> Message: {message.message}</p>
        <p>Time: {message.currentTime}</p>
        <p>Sender: {message.receiverId?.name}</p>
        <Link to={`/messages/public/${message.id}/edit`}>
          <button>Edit</button>
          </Link>
        <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
      </div>
    </div>
  );
}
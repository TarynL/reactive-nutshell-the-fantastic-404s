import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { getSingleUser } from '../../modules/UserManager'


export const PublicMessageCard = ({ message, handleDeleteMessage}) => {
  const currentUserId = JSON.parse(sessionStorage.getItem("nutshell_user"))
  const [recipient, setRecipient] = useState({});

useEffect(() => {
    getSingleUser(message.receiverId)
    .then(user => {
        setRecipient(user)
    }, [message]);
})

  return (
    <div className="card">
      <div className="card-PMcontent">
        <p className="card-taskName"> Message: {message.message}</p>
        <p>Sender: {recipient?.name}</p>

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
import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import {getSingleUser} from '../../modules/UserManager'


export const PublicMessageCard = ({ message, handleDeleteMessage}) => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //     getSingleUser(message.userId)
  //     .then(user => {
  //       setUsers(user)
  //     }, []);
  // })

  return (
    <div className="card">
      <div className="card-content">
        <p className="card-taskName"> Message: {message.message}</p>
        <p>Sender: {message.user?.name}</p>
        <Link to={`/messages/public/${message.id}/edit`}>
          <button>Edit</button>
          </Link>
        <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
      </div>
    </div>
  );
}
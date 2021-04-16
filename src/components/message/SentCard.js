import React, {useState, useEffect} from 'react';
import "./MessageCard.css";
import {getSingleUser} from '../../modules/UserManager'
import { Link } from "react-router-dom";



export const SentCard = ({message, handleDeleteMessage}) => {
const [recipient, setRecipient] = useState([]);

useEffect(() => {
    getSingleUser(message.receiverId)
    .then(user => {
        setRecipient(user)
    }, []);
})



    return (
        <div className="messages">
            <div className="message-content">
                <h3>Sent to: {recipient.name}</h3>
                <p>{message.currentTime}</p>
                <p>Message: {message.message}</p>
                <Link to={`/messages/${message.id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete</button>
                

                

            </div>

        </div>
    )

}
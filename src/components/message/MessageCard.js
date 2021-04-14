import React, {useState, useEffect} from 'react';
import "./MessageCard.css";
import {getMessageById} from "../../modules/MessageManager"
import {useParams} from "react-router-dom";



export const MessageCard = () => {
 const [message, setMessages] = useState({});
 const {messageId} = useParams();

 useEffect(() => {
     getMessageById(messageId)
     .then(message =>{
     setMessages({
         userId: message.userId,
         message: message.message
     });
    })
 },[messageId]);

    return (
        <div className="messages">
            <div className="message-content">
                <h3>From: {message.userId?.name}</h3>
                <p>Message: {message.message}</p>

            </div>

        </div>
    )

}
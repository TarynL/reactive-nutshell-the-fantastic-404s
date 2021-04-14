import React, {useState, useEffect} from 'react';
import "./MessageCard.css";
import {getMessageById} from "../../modules/MessageManager"
import {useParams} from "react-router-dom";



export const MessageCard = () => {
 const [message, setMessages] = useState({});
 const {userId} = useParams();

 useEffect(() => {
     getMessageById(userId)
     
     .then(message =>{
     setMessages({
         userId: userId,
         message: message.message
     });
    })
 },[userId]);

    return (
        <div className="messages">
            <div className="message-content">
                <h3>From: {message.user?.name}</h3>
                <p>Message: {message.message}</p>

            </div>

        </div>
    )

}
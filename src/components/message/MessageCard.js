import React from 'react';
import "./MessageCard.css";





export const MessageCard = ({ message }) => {


    return (
        <div className="card">
            <div className="card-content">
                <h3>From: {message.user?.name}</h3>
                <p>{message.currentTime}</p>
                <p>Message: {message.message}</p>
                
            </div>

        </div>
    )

}
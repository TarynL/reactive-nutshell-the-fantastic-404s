import React, {useState, useEffect} from 'react';
import "./MessageCard.css";
import {getSingleUser}from "../../modules/UserManager"





export const MessageCard = ({ message }) => {
    const [userName, setUserName] = useState()

    useEffect(() => {
        getSingleUser(message.senderId)
        .then(res => setUserName(res.name))
        
    }, []);


    return (
        <div className="card">
            <div className="card-content messages">
                <h4>From: {userName}</h4>
                <p>{message.timestamp}</p>
                <p>Message: {message.message}</p>
                
            </div>

        </div>
    )

}
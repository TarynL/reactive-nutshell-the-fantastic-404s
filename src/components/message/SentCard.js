import React, {useState, useEffect} from 'react';
import "./MessageCard.css";
import {getSingleUser}from "../../modules/UserManager"
import { Link } from "react-router-dom";



export const SentCard = ({message}) => {
const [userName, setUserName] = useState()

    useEffect(() => {
        getSingleUser(message.userId)
        .then(res => setUserName(res.name))
        
    }, []);

    return (
        <div className="card">
            <div className="card-content messages">
                <h4>Sent to: {userName}</h4>
                <p>{message.timestamp}</p>
                <p>Message: {message.message}</p>
                <Link to={`/messages/${message.id}/edit`}>
                    <button>Edit</button>
                </Link>
               
                

                

            </div>

        </div>
    )

}
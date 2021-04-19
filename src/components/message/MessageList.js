import React, { useState, useEffect } from 'react';
import { MessageCard } from './MessageCard'
import {SentCard} from './SentCard'
import { getAllMessages, getSentMessages } from '../../modules/MessageManager'

import { useHistory } from 'react-router-dom';
import "./MessageCard.css"

export const MessageList = () => {

    const [messages, setMessages] = useState([]);
    const [sent, setSent] = useState([]);
    const history = useHistory();

    const loggedInUser = sessionStorage.getItem("nutshell_user")
    const getLoggedInMessages = () => {
        

        return getSentMessages(loggedInUser)
            .then(send => {
              setSent(send)

            })
    }

    const getMessages = () => {
        return getAllMessages()
            .then(messagesFromAPI=> {
                setMessages(messagesFromAPI)
            });
    };

    useEffect(() => {
        getMessages();
        
    }, []);

    useEffect(() => {
        getLoggedInMessages();
    }, []);

    // const handleDeleteMessage = (id) => {
    //     deleteMessage(id)
    //       .then(() => getSentMessages()
    //         .then(setSent));
    //   };
    
    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="button"
                    onClick={() => { history.push("/messages/create") }}>
                    Send Message
        </button>
            </section>

            <div className="container-cards">
                {messages.map(message =>
                    <MessageCard
                        key={message.id}
                        message={message}
                    />).reverse()}
            </div>

            <div className="container-cards">
                {sent.map(sentMessage =>
               
                    <SentCard
                        key={sentMessage.id}
                        message={sentMessage}
                        
                    />).reverse()}
            </div>
        </>
    )
}
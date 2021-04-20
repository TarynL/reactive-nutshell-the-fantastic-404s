import React, { useState, useEffect } from 'react';
import { MessageCard } from './MessageCard'
import { SentCard } from './SentCard'
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
            .then(messagesFromAPI => {
                setMessages(messagesFromAPI)
            });
    };

    useEffect(() => {
        getMessages();

    }, []);

    useEffect(() => {
        getLoggedInMessages();
    }, []);

    return (
        <div className="grid-container">
            <section className="box1 section-content">
                <button type="button"
                    className="button"
                    onClick={() => { history.push("/messages/create") }}>
                    Send Message
        </button>
            </section>
                <div className="box2 container-cards">
                    <h4>Incoming Messages</h4>
                    <div className="incomingMessages">
                        {sent.map(message =>
                            <MessageCard
                                key={message.id}
                                message={message}
                            />).reverse()}
                    </div>
                </div>

                <div className="box3 container-cards">
                    <h4>Sent Messages</h4>
                    <div className="sentMessages">
                        {messages.map(sentMessage =>

                            <SentCard
                                key={sentMessage.id}
                                message={sentMessage}

                            />).reverse()}
                    </div>
                </div>
        </div>
    )
}
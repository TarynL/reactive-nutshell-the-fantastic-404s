import React, {useState, useEffect} from 'react';
import {MessageCard} from './MessageCard'
import {getAllMessages} from '../../modules/MessageManager'
import {useHistory} from 'react-router-dom';
import "./MessageCard.css"

export const MessageList = () => {

    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllMessages()
        .then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        });
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <>
        <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { history.push("/messages/create") }}>
          Send New Message
        </button>
      </section>

        <div className = "container-cards">
            {messages.map(message =>
                <MessageCard
                key={message.id}
                message={message}
                />)}
        </div>
        </>
    )
}
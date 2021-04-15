import React, {useState, useEffect} from 'react';
import {PublicMessageCard} from './messageCard';
import {getAllPublicMessages, deleteMessage} from '../../modules/MessageManager';
import {useHistory} from 'react-router-dom';

export const MessageList = () => {

    const [messages, setMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllPublicMessages()
        .then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        });
    };


    useEffect(() => {
        getMessages();
    }, []);

    const handleDeleteMessage = (id) => {
        console.log(id)
        deleteMessage(id)
        .then(() => getMessages().then(setMessages));
      };

    return (
        <>
        <section className="section-content">
        <button type="button"
          className="button"
          onClick={() => { history.push("/messages/public/create") }}>
          Send New Message
        </button>
      </section>

        <div className = "container-cards">
            {messages.map(message =>
                <PublicMessageCard
                key={message.id}
                message={message}
                handleDeleteMessage={handleDeleteMessage} 
                />)}
        </div>
        </>
    )
}
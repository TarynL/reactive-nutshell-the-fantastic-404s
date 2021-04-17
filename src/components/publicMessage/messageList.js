import React, { useState, useEffect } from 'react';
import { PublicMessageCard } from './messageCard';
import { getAllPublicMessages, deleteMessage } from '../../modules/MessageManager';
import { useHistory } from 'react-router-dom';
import { PublicMessageForm } from './messageForm';

export const MessageList = () => {

    const [publicMessages, setPublicMessages] = useState([]);
    const history = useHistory();

    const getMessages = () => {
        return getAllPublicMessages()
            .then(messagesFromAPI => {
                setPublicMessages(messagesFromAPI)
            });
    };
    const handleDeleteMessage = (id) => {
        deleteMessage(id)
            .then(() => getMessages().then(()=>history.push("/")));
    };

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <>
            <div className="container-cards">
                {publicMessages.map(message =>
                    <PublicMessageCard
                        key={message.id}
                        message={message}
                        handleDeleteMessage={handleDeleteMessage} 
                    />).reverse()}
              
            </div>
            <section className="newMessage">
                <PublicMessageForm getMessages={getMessages} />
                
                {/* <button type="button"
                    className="button"
                    onClick={() => { history.push("/messages/public/create") }}>
                    Send New Message
                 </button> */}
            </section>
        </>
    )
}
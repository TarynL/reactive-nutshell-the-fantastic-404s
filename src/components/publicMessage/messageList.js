import React, { useState, useEffect } from 'react';
import { PublicMessageCard } from './messageCard';
import { getAllPublicMessages, deleteMessage } from '../../modules/PublicMessageManager';
import { useHistory } from 'react-router-dom';
import { PublicMessageForm } from './messageForm';
import './publicmessage.css';
import { addNewFriend, getAllFriends} from '../../modules/FriendManager';


export const MessageList = () => {

    const [publicMessages, setPublicMessages] = useState([]);
    const history = useHistory();
    const [readMore,setReadMore] = useState(false);
    const [friend, setFriend] = useState([]);

    const linkName=readMore?'Read Less':'Read More'

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



    // const MAX_ITEMS = 5;

    // class readMoreMessages extends React.Component{
    //     componentWillMount() {
    //         this.state = {
    //             isOpen: false,
    //         }
    //         this.items = [messagesFromAPI]
    //     }

    // toggle = () => {
    //     this.setState({ isOpen: !this.state.isOpen})
    // }

    // getRenderedItems() {
    //     if (this.state.isOpen){
    //         return this.items
    //     }
    //     return this.items.slice(0, MAX_ITEMS)
    // }}

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
                        checkFriend={checkFriend}
                        handleAddFriend={handleAddFriend}
                        handleDeleteMessage={handleDeleteMessage} 
                    />)}
              
            </div>
            <section className="newMessage">
                <PublicMessageForm getMessages={getMessages} />
                
                {/* <button type="button"
                    className="button"
                    onClick={() => { history.push("/messages/public/create") }}>
                    Send New Message
                 </button> */}
            </section>
            <div>
                <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><p>{linkName}</p></a>
            </div>
        </>
    )
}
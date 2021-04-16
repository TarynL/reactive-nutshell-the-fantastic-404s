import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addMessage } from '../../modules/MessageManager';

export const PublicMessageForm = () => {

    // time = today.getHours() + ':' + today.getMinutes()
    const [message, setMessage] = useState({
        userId: 0, 
        receiverId: parseInt(sessionStorage.getItem("nutshell_user")),
        message: "",
        currentTime: ""
    });

    // const [users, setUsers] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (evt) => {
        const newMessage = { ...message }
        let selectedVal = evt.target.value

        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newMessage[evt.target.id] = selectedVal
        setMessage(newMessage)
    }

    // useEffect(() => {
    //     getAllUsers()
    //         .then(usersFromAPI => {
    //             setUsers(usersFromAPI)
    //         });
    // }, []);

    const handleClickSaveMessage = (evt) => {
        evt.preventDefault()
        addMessage(message)
        .then(() => history.push("/"))
    }

    return (


        <form className="messageForm">
            <h2 className="messageFrom_title">New Public Message</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <input type="text" id="message" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Message" value={message.message} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
				onClick={handleClickSaveMessage}>
				Send Message
          </button>
        </form>
    )
}
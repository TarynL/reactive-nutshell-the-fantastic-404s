import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { addMessage } from '../../modules/MessageManager';

export const PublicMessageForm = ({getMessages}) => {

    // const history = useHistory();
    const [isLoading, setIsLoading] = useState(false)

    const [message, setMessage] = useState({
        userId: 999, 
        receiverId: parseInt(sessionStorage.getItem("nutshell_user")),
        message: "",
        timestamp: ""
    });

    const handleControlledInputChange = (evt) => {
        const newMessage = { ...message }
        let selectedVal = evt.target.value

        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newMessage[evt.target.id] = selectedVal
        setMessage(newMessage)
    }

    const handleClickSaveMessage = (evt) => {
        evt.preventDefault()
        setIsLoading(true)
        addMessage(message)
        .then(() =>  {
            getMessages()
            setIsLoading(false)
            setMessage( {
                userId: 999, 
                receiverId: parseInt(sessionStorage.getItem("nutshell_user")),
                message: "",
                timestamp: "" 
            })
    })}

    return (

        <div>
            <label htmlFor="message">
                <input type="text" id="message" className="addMessage" value={message.message} placeholder="add message" onChange={handleControlledInputChange} />
            </label>
            <button type="button" className="button" disabled={isLoading} onClick={handleClickSaveMessage}>Send</button>
        </div>
    )
}
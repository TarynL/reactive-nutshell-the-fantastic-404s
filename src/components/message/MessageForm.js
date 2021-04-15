import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addMessage } from '../../modules/MessageManager';
import { getAllUsers } from '../../modules/UserManager';
import "./MessageCard.css";

export const MessageForm = () => {
    var today = new Date(),

    time = today.getHours() + ':' + today.getMinutes()
    const [message, setMessage] = useState({
        userId: parseInt(sessionStorage.getItem("nutshell_user")), 
        receiverId: 0,
        message: "",
        currentTime: time
    });

    const [users, setUsers] = useState([]);

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

    useEffect(() => {
        getAllUsers()
            .then(usersFromAPI => {
                setUsers(usersFromAPI)
            });
    }, []);

    const handleClickSaveMessage = (evt) => {
        evt.preventDefault()

        const receiverId = message.receiverId

        if (receiverId === 0) {
            window.alert("Please select receiver of message")
        } else {
            addMessage(message)
                .then(() => history.push("/messages"))
        }
    }

    return (


        <form className="messageForm">
            <h2 className="messageFrom_title">New Message</h2>
            <fieldset>
				<div className="form-group">
					<label htmlFor="receiverId">Send to: </label>
					<select value={message.receiverId} name="receiver" id="receiverId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a receiver</option>
						{users.map(u => (
							<option key={u.id} value={u.id}>
								{u.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
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
// Form component for private messages

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addMessage } from '../../modules/MessageManager';
// import { getAllUsers } from '../../modules/UserManager';
import {getAllFriends} from '../../modules/FriendManager'
import "./MessageCard.css";


export const MessageForm = () => {
    // named variable to get time format 
    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes()

    // object data for useState hook
    const [message, setMessage] = useState({
        userId: parseInt(sessionStorage.getItem("nutshell_user")), 
        receiverId: 0,
        message: "",
        currentTime: time
    });

    const [friends, setFriends] = useState([]);

    const history = useHistory();

    // Function that handles input change on form.
    // name a copy of the message
    // Create variable to hold the targeted value
    // If statement target ids that include Id and setting/parsing
    //  above variable
    // then set message with new object
    const handleControlledInputChange = (evt) => {
        const newMessage = { ...message }
        let selectedVal = evt.target.value

        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newMessage[evt.target.id] = selectedVal
        setMessage(newMessage)
    }

    // useEffect for getting all friends then setting the result to state
    useEffect(() => {
        
        getAllFriends()
        
            .then(friendsFromAPI => {
                setFriends(friendsFromAPI)
            });
    }, []);

    // fucntion handling the save of message
    // set variable to the receiverId 
    // if receviverId is not selected, alert window pops up
    // then the message is added to the stack of messages using UseHistory hook
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
						{friends.map(u => (
                        
							<option key={u.userId} value={u.userId}>
								@{u.user.name}
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
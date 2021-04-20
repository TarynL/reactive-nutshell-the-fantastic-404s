import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addNewFriend } from '../../modules/FriendManager';
import { getUserByName } from '../../modules/UserManager';



export const AddFriendForm = () => {
    const [friend, setFriend] = useState({
        
        userId: "",
        currentUserId: sessionStorage.getItem("nutshell_user")

    })


    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newFriend = { ...friend }
        let selectedVal = event.target.value


        newFriend[event.target.id] = selectedVal
        setFriend(newFriend)
    }

    const handleClickSaveFriend = (event) => {
        event.preventDefault()

        let enteredName = getUserByName(friend.name).then(result => {
            let friendToBeAdded = { userId: result[0].id, currentUserId: parseInt(sessionStorage.getItem("nutshell_user")) }
            addNewFriend(friendToBeAdded).then(() => history.push("/friends"))
        })
    }

    useEffect(() => {
        ;
    }, []);

    return (
        <form className="addFriendForm">
			<h2 className="addFriendForm__title">Add Friend</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter Name" value={friend.name} />
				</div>
			</fieldset>
			
			<button className="btn btn-primary"
				onClick={handleClickSaveFriend}>
				Add Friend
          </button>
		</form>
    )
}


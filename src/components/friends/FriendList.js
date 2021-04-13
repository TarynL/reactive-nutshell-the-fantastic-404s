import React, { useState, useEffect } from 'react'
import { FriendCard } from './FriendCard'
import { useHistory } from 'react-router-dom'
import { getAllFriends, deleteFriend } from '../../modules/FriendManager'

export const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const history = useHistory();

    const handleDeleteFriend = id => {
        deleteFriend(id)
        .then(() => getAllFriends().then(setFriends));
    };

    const getFriends = () => {
        return getAllFriends().then(friendsFromAPI => {
            console.log(friendsFromAPI)
            setFriends(friendsFromAPI)
        });
    };

    useEffect(() => {
        getFriends();
    }, []);

    return (
        <>
            <section>
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/friends/addFriends")}}>Add Friends
                    </button>
            </section>
            <div className="container-cards">
                {friends.map(friend =>
                <FriendCard key={friend.id}
                friend={friend}
                handleDeleteFriend={handleDeleteFriend} 
                user={friend.user} />)}
            </div>
        </>
    )
};
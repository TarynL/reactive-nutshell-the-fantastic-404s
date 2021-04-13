import React from 'react'

export const FriendCard = ({ friend, handleDeleteFriend }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="friend__name">{friend.user?.name}</h3>
                <email className="friend__email">{friend.user?.email}</email>
                <button type="button" onClick={() =>
                handleDeleteFriend(friend.id)}>Delete Friend</button>
            </div>
        </div>
    )
}
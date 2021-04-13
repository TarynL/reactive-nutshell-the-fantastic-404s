import React from 'react'

export const FriendCard = ({ friend, handleDeleteFriend, user }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="friend__name">Name: {friend.user?.name}</h3>
                <p className="friend__email">Email: {friend.user?.email}</p>
                <button type="button" onClick={() =>
                handleDeleteFriend(friend.id)}>Delete Friend</button>
            </div>
        </div>
    )
}
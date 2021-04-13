import React from 'react'

export const FriendCard = ({ friend, handleDeleteFriend }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="friend__name">{friend.name}</h3>
                <email className="friend__email">{friend.email}</email>
                
            </div>
        </div>
    )
}
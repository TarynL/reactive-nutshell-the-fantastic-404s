import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addFriend } from '../../modules/FriendManager';

const currentUserId = sessionStorage.getItem("nutshell_user")

export const AddFriendForm = () => {
    const [friends, setFriends] = useState({
        userId: 0,
        currentUserId: currentUserId
    })

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
}
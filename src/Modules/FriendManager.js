const remoteURL = "http://localhost:8088"

const currentUser = parseInt(sessionStorage.getItem("nutshell_user"));

export const getAllFriends = (currentUser) => {
    return fetch(`${remoteURL}/friends/?currentUserId=${currentUser}&_expand=user`).then(result => result.json())
};
//http://localhost:8088/friends/?currentUserId=1&_expand=user
export const getFriendsByUserId = (userId) => {
    return fetch(`${remoteURL}/friends/${userId}?_expand=user`).then(result => result.json())
};

export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
};



export const addFriend = (friend) => {
    console.log(friend)
    return fetch(`${remoteURL}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
    }).then(response => response.json())
};
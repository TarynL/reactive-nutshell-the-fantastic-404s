const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("nutshell_user")

export const getAllFriends = () => {
    return fetch(`${remoteURL}/friends/?currentUserId=${currentUser}&_expand=user`).then(result => result.json())
};
//http://localhost:8088/friends/?currentUserId=1&_expand=user
export const getFriendsById = (id) => {
    return fetch(`${remoteURL}/friends/${id}?_expand=user`).then(result => result.json())
};

export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
};

export const addFriend = (id) => {
    return fetch(`${remoteURL}/friends/`)
};
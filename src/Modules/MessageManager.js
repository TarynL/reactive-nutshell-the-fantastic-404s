const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("nutshell_user")

export const getAllMessages = () => {
    return fetch(`${remoteURL}/messages?receiverId=${currentUser}`)
    .then(result => result.json())
};

export const getMessageById = (userId) => {
    return fetch (`${remoteURL}/messages?userId=${userId}&_expand=user`)
    .then(res => res.json())
}




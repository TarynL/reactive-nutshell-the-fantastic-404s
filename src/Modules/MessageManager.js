const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("nutshell_user")

export const getAllMessages = () => {
    return fetch(`${remoteURL}/messages?receiverId=${currentUser}&_expand=user`)
    .then(result => result.json())
};

export const addMessage = (newMessage) => {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(response => response.json())
}





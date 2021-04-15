const remoteURL = "http://localhost:8088"

const currentUser = sessionStorage.getItem("nutshell_user")

export const getAllMessages = () => {
  return fetch(`${remoteURL}/messages?receiverId=${currentUser}&_expand=user`)
    .then(result => result.json())
};

export const getAllPublicMessages = () => {
  return fetch(`${remoteURL}/messages?userId=0&_expand=user`)
    .then(result => result.json())
};

export const getMessagesById = (id) => {
  return fetch(`${remoteURL}/messages/${id}?_expand=user`)
    .then(response => response.json())
}

export const addMessage = (newMessage) => {
  return fetch(`${remoteURL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newMessage)
  }).then(response => response.json())
}

export const deleteMessage = (id) => {
  return fetch(`${remoteURL}/messages/${id}`, {
    method: "DELETE"
  }).then(response => response.json())
}


export const updatePublicMessage = (editedMessage) => {
  return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedMessage),
  }).then((data) => data.json());
};

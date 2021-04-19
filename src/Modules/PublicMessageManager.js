const remoteURL = "http://localhost:8088"

// const currentUser = sessionStorage.getItem("nutshell_user")

export const getAllPublicMessages = () => {
  return fetch(`${remoteURL}/publicMessages?_expand=user`)
    .then(result => result.json())
};

export const getMessagesById = (id) => {
  return fetch(`${remoteURL}/publicMessages/${id}?_expand=user`)
    .then(response => response.json())
}

export const addMessage = (newMessage) => {
  return fetch(`${remoteURL}/publicMessages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newMessage)
  }).then(response => response.json())
}
export const getSentMessages = (userId) => {
    return fetch(`${remoteURL}/publicMessages?userId=${userId}&_expand=user`)
    .then(result => result.json())
}


export const deleteMessage = (id) => {
  return fetch(`${remoteURL}/publicMessages/${id}`, {
    method: "DELETE"
  }).then(response => response.json())
}


export const updatePublicMessage = (editedMessage) => {
  return fetch(`${remoteURL}/publicMessages/${editedMessage.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedMessage),
  }).then((data) => data.json());
};

export const updatePrivateMessage = (editedMessage) => {
    return fetch(`${remoteURL}/messages/${editedMessage.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedMessage),
    }).then((data) => data.json());
  };

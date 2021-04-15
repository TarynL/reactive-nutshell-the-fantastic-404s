const remoteURL = "http://localhost:8088"

export const getArticleById = (id) => {
    return fetch (`${remoteURL}/articles/${id}`)
    .then(res => res.json())
}

export const getArticleByUserId = ([userId]) => {
  return ( userId.forEach(user => {fetch (`${remoteURL}/articles?userId=${user}`).then(res => res.json())}))
}

export const getAllArticles = (userId) => {
    return fetch(`${remoteURL}/articles?userId=${userId}`)
    .then(res => res.json())
}

export const addArticle = (newArticle) => {
    return fetch(`${remoteURL}/articles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
    }).then(res => res.json())
}


export const deleteArticle = (id) => {
    return fetch (`${remoteURL}/articles/${id}`, {
     method: "DELETE"
    }).then(result => result.json())
}

export const updateArticle = (editedArticle) => {
    return fetch(`${remoteURL}/articles/${editedArticle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedArticle)
    }).then(data => data.json());
  }

  export const getRandomId = () => {
    return fetch(`${remoteURL}/articles`)
      .then(result => result.json())
      .then(articles => {
        const randomIndex = Math.floor(Math.random() * articles.length);
        const randomAnimal = articles[randomIndex];
        return randomAnimal.id;
    });
  }
  

  
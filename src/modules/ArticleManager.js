const remoteURL = "http://localhost:8088"

export const getArticleById = (id) => {
    return fetch (`${remoteURL}/articles/${id}`)
    .then(res => res.json())
}

export const getAllArticles = () => {
    return fetch(`${remoteURL}/articles`)
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
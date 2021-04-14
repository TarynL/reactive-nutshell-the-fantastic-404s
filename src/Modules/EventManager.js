

export const getEventsForUser = (userId) => {
    return fetch(`http://localhost:8088/events?userId=${userId}`).then(res => res.json())
}

export const deleteEventById = (id) =>{
    return fetch(`http://localhost:8088/events?id=${id}`,{
        method:"DELETE",
        headers: {
            "Conent-Type":"application/json"
        }

    }).then(res => res.json())
}
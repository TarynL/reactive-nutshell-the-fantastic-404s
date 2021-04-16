

export const getEventsForUser = (userId) => {
    return fetch(`http://localhost:8088/events?userId=${userId}`).then(res => res.json())
}

export const deleteEventById = (id) => {
    return fetch(`http://localhost:8088/events/${id}`, {
        method: "DELETE"

    }).then(res => res.json())
}


export const saveEvent = (newEvent) => {
    return fetch(`http://localhost:8088/events`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(res => res.json())
}
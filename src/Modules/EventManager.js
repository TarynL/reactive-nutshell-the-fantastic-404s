

export const getEventsForUser = (userId) => {
    return fetch(`http://localhost:8088/events?userId=${userId}`).then(res => res.json())
}
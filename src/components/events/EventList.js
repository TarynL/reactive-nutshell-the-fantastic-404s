import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { deleteEventById, getEventsForUser, getFriendsOfCurrentUser } from "../../modules/EventManager"
import { EventCard } from "./EventCard"
import "./event.css"

export const EventList = () => {
    const [events, setEvent] = useState([]);
    const [friends, setFriends] = useState([]);
    const [friendString, setFriendstring] = useState([""])
    const history = useHistory();
    // Gets list of all friends of the user and appends the users id to the array
    const getFriendsOfUser = () => {
        return getFriendsOfCurrentUser(parseInt(sessionStorage.getItem("nutshell_user")))
            .then(friendsFromApi => { setFriends([...friendsFromApi.map(friend => { return friend.userId }), parseInt(sessionStorage.getItem("nutshell_user"))]) })
    }
    // Get events by soonest, and events that have finished are appended to the back of the array.
    const getSoonestEvent = (sortEvents) => {
        const now = new Date()
        let sortedByDate = sortEvents.sort(
            (currentEntry, nextEntry) =>
                Date.parse(currentEntry.eventDate) - Date.parse(nextEntry.eventDate)
        )
        let future = []
        let completed = []
        for (let i = 0; i < sortedByDate.length; i++) {
            if (Date.parse(sortedByDate[i].eventDate) > Date.now()) {
                future.push(sortedByDate[i])
            } else {
                completed.push(sortedByDate[i])}
        }
        return [...future, ...completed]
    }

    // Creates a sting that is used to get the events for the users,  e.g. user={userId} then join elements in array with &
    const getFriendString = () => {
         setFriendstring(friends.map(friend => { return `userId=${friend}` }).join("&"))
    }
    useEffect(() => {
        getFriendsOfUser()
    }, [])
    useEffect(() => {
        getFriendString()
    }, [])
    // Get events from the Api then sort them by date and store them in state
    const getEvents = () => {
        let tempFriends = friends.map(friend => { return `userId=${friend}` }).join("&")
        return getEventsForUser(tempFriends).then(eventsFromApi => { console.log(eventsFromApi)
            setEvent(getSoonestEvent(eventsFromApi)) })
    }
    //Delete event by event id, then get all events and render
    const handleDeleteEvent = (id) => {
        deleteEventById(id).then(() => getEvents()).then(() => history.push("/events"))

    }
    useEffect(() => {
        getEvents();
    }, [])

    // Check if any events exist for the user, if none then return nothing
    return (<>
        <Link to="/events/create"><button>Create Event</button></Link>
        {friends.length > 0 ?
            (<div>
                <div className="eventList">
                    {events.length > 0 ?
                        events.map((event, index) => {
                            // Events are sorted by date, if it is the first element in the array then
                            // set it's class name to first event
                            // else later events
                            let divClass = (index === 0) ? "firstEvent" : "laterEvents"
                            return <div className={divClass}>
                                <EventCard
                                    key={event.id}
                                    event={event}
                                    handleDeleteEvent={handleDeleteEvent} />
                            </div>
                        })
                        : ""}
                </div>
            </div>) : ""
        }</>)

}
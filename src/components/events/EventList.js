import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { deleteEventById, getEventsForUser } from "../../modules/EventManager"
import { EventCard } from "./EventCard"
import "./event.css"

export const EventList = () => {
    const [events, setEvent] = useState([]);
    const history = useHistory();
    // Sort array by date. 
    const getSoonestEvent = (sortEvents) => {
        let sortedByDate = sortEvents.sort(
            (currentEntry, nextEntry) =>
                Date.parse(currentEntry.eventDate) - Date.parse(nextEntry.eventDate)
        )
        return sortedByDate
    }
    // Get events from the Api then sort them by date and store them in state
    const getEvents = () => {
        return getEventsForUser(sessionStorage.getItem("nutshell_user")).then(eventsFromApi => { setEvent(getSoonestEvent(eventsFromApi)) })
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
    <div>
        <Link to="/events/create"><button>Create Event</button></Link>
        <div className="eventList">
            {events.length > 0 ?
                events.map((event, index) => {
                    // Events are sorted by date, if it is the first element in the array then
                    // set it's class name to first event
                    // else later events
                    let divClass = (index  === 0 )?"firstEvent":"laterEvents"
                    return <div className={divClass}>
                        <EventCard
                        key={event.id}
                        event={event}
                        handleDeleteEvent={handleDeleteEvent} />
                        </div>
                })
                : ""}
        </div>
    </div>
    </>)

}
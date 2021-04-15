import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { deleteEventById, getEventsForUser } from "../../modules/EventManager"
import { EventCard } from "./EventCard"

export const EventList = () => {
    const [events, setEvent] = useState([])

    const getEvents = () => {
        return getEventsForUser(sessionStorage.getItem("nutshell_user")).then(eventsFromApi => { setEvent(eventsFromApi) })
    }
    useEffect(() => {
        getEvents();
    }, [])
    //Delete event by event id, then get all events and render
    const handleDeleteEvent = id => {
        deleteEventById(id).then(getEvents()).then(setEvent)
    }


    // Check if any events exist for the user, if none then return nothing
    return ( <>
        <Link to="/events/create"><button>Create Event</button></Link>  {events.length > 0?
            events.map(event => {
                return <EventCard 
                key={event.id} 
                event={event} 
                handleDeleteEvent={handleDeleteEvent} />
            })
        :""}</>)

}
import React, { useState, useEffect } from "react"
import { deleteEventById, getEventsForUser } from "../../modules/EventManager"
import { EventCard } from "./EventCard"
import { Link } from "react-router-dom";

export const EventList = () => {
    const [events, setEvent] = useState([])

    const getEvents = () => {
        return getEventsForUser(sessionStorage.getItem("nutshell_user")).then(eventsFromApi => { setEvent(eventsFromApi) })
    }
    useEffect(() => {
        getEvents();
    }, [])

    const handleDeleteEvent = id => {
        deleteEventById(id).then(getEvents()).then(setEvent)
    }



    return ( events.length > 0?<>
        {events.map(event => {
            return <EventCard key={event.id} event={event} handleDeleteEvent={handleDeleteEvent} />
        })}


    </>:"")

}
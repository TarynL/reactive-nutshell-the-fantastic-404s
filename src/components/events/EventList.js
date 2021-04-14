import React, { useState, useEffect } from "react"
import { getEventsForUser } from "../../modules/EventManager"
import {EventCard} from "./EventCard"
import { Link } from "react-router-dom";

export const EventList = () => {
    const [events, setEvent] = useState([])


    const getEvents = () => {
        return getEventsForUser(sessionStorage.getItem("nutshell_user")).then(eventsFromApi => { setEvent(eventsFromApi) })
    }
    useEffect(() => {
        getEvents();
    }, [])

    return (<>
        {events.map(event => {
        return   <EventCard key={event.id} event={event} />
    })}
    

    </>)

}
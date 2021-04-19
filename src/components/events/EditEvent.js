import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getEventById, updateEvent, getEventsForUser } from "../../modules/EventManager";
import { stateNames } from "./EventEntryForm"


export const EditEvent = () => {
    const { eventId } = useParams()
    const history = useHistory()
    const [event, setEvent] = useState({})
    const [states] = useState([...stateNames])

    useEffect(() => {
        getEventById(eventId).then((eventFromApi) => {
            setEvent(eventFromApi);
        })
    }, [])
    const handleControlledInputChange = (evt) => {
        let selected = evt.target.value
        let newEvent = { ...event }
        if (evt.target.id === "cityName") {
            newEvent["city"] = selected;
        } else if (evt.target.id === "state__name") {
            newEvent["state"] = selected;
        } else {
            newEvent[evt.target.id] = selected
        }
        setEvent(newEvent)
    }

    const handleSaveEvent = (evt) => {
        evt.preventDefault();

        if (event.eventDate === "" || event.eventName === "") {
            alert("Check that a date and event name have been entered")
        } else {
            updateEvent(event).then(
                getEventsForUser(event.userId).then(() => { history.push("/events") }))
        }
    }

    // This maps over an array of states and removes Select State and the current state from the list
    const selectStates = states.map((state, index) => {

            return <option key={index} id={"state__" + index}>{state}</option>
    })

    return (<>
        <form action="">
            <div id="eventName">
                <fieldset>
                    <label form="eventName">Event Name</label>
                    <input type="text" id="eventName" onChange={handleControlledInputChange} defaultValue={event.eventName}></input>
                </fieldset>
            </div>
            <div id="eventLocation">
                <fieldset>
                    <label form="city">City</label>
                        <input type="text" name="cityName" id="cityName" onChange={handleControlledInputChange} defaultValue={event.city}/>
                    <label form="state">State</label>
                    <select id="state__name" onClick={handleControlledInputChange} >
                        <option defaultValue>{event.state}</option>
                        {selectStates}
                    </select>
                </fieldset>
            </div>
            <fieldset>
                <label htmlFor="eventDate">Current Event Date: </label>
                <input type="date" name="eventDate" id="eventDate" onChange={handleControlledInputChange} defaultValue={event.eventDate}/>
            </fieldset>
            <button id="saveEventConfirm" onClick={handleSaveEvent}>Confirm</button>

        </form>
    </>)


}
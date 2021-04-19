import React, { useState, useEffect } from "react"
import { useHistory } from "react-router";
import { getEventsForUser, saveEvent } from "../../modules/EventManager"
import "./event.css"
export const stateNames = [
    "Select State",
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "American Samoa",
    "District of Columbia",
    "Federated States of Micronesia",
    "Guam",
    "Marshall Islands",
    "Northern Mariana Islands",
    "Palau",
    "Puerto Rico",
    "Virgin Islands"
]

export const GetStatesForSelect = () => {
    const history = useHistory()
    const [states, setStates] = useState([])
    const [event, setEvent] = useState({
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        eventName: "",
        city: "",
        state:"",
        eventDate: ""
    })
    const getStates = () => {
        setStates(stateNames)
    }
    useEffect(() => {
        getStates()
    }, [])
    const handleControlledInputChange = (evt) => {
        let selected = evt.target.value
        let newEvent = { ...event }
        if (evt.target.id === "cityName") {
            newEvent["city"]= selected;
        } else if (evt.target.id === "state__name") {
            newEvent["state"]= selected;
        } else {
            newEvent[evt.target.id] = selected
        }
        setEvent(newEvent)
    }


    const handleSaveEvent = (evt) => {
        evt.preventDefault();
        
        if (event.eventDate === 0 || event.eventName === "") {
            alert("Check that a date and event name have been entered")
        } else {
            saveEvent(event).then(
                getEventsForUser(event.userId).then(() => { history.push("/events") }))
        }
    }
    // Generate State list for drop down
    const selectStates = states.map((state, index) => {
        return <option key={index} id={"state__" + index}>{state}</option>
    })
    return (<>
        <div id="eventForm">
            <form action="">
                <div id="eventName">
                    <fieldset>
                        <label form="eventName">Event Name</label>
                        <input type="text" id="eventName" onChange={handleControlledInputChange}></input>
                    </fieldset>
                </div>
                <fieldset>
                    <label form="eventDate">Event Date </label>
                    <input type="date" name="eventDate" id="eventDate" onChange={handleControlledInputChange} />
                </fieldset>
                <div id="eventLocation">
                    <fieldset>
                        <label form="city">City</label>
                        <input type="text" name="cityName" id="cityName" onChange={handleControlledInputChange} />
                        <label form="state">State</label>
                        <select id="state__name" onChange={handleControlledInputChange}>
                            {selectStates}
                        </select>
                    </fieldset>
                </div>
                <button id="saveEventConfirm" onClick={handleSaveEvent}>Confirm</button>
            </form>
        </div>
    </>);
};
import React, { useState, useEffect } from "react"
import {getEventsForUser} from "../../modules/EventManager"
import "./event.css"
const stateNames = [
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
    const [states, setStates] = useState([])

    const getStates = () => {
        setStates(stateNames)
    }
    useEffect(() => {
        getStates()
    }, [])
    const selectStates = states.map((state, index) => { return <option key={index} id={"state__" + index}>{state}</option> })
    return (<>
        <div id="eventForm">
            <form action="">
                <div id="eventName">
                    <fieldset>
                        <label form="eventName">Event Name</label>
                        <input type="text" id="eventName1"></input>
                    </fieldset>
                </div>
                <fieldset>
                    <label form="eventDate">Event Date </label>
                    <input type="date" name="eventDate" id="eventDate" />
                </fieldset>
                <div id="eventLocation">
                    <fieldset>
                        <label form="city">City</label>
                        <input type="text" name="cityName" id="cityName" />
                        <label form="state">State</label>
                        <select id="state__name" >
                            {selectStates}
                        </select>
                    </fieldset>
                </div>
                <button id="showWeather">Show Weather</button>
            </form>
        </div>
    </>);
};
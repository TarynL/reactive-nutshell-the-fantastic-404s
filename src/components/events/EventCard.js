import React, { useEffect, useState } from "react"
import { getWeatherForecast } from "../../modules/WeatherManager"
import { showWeather } from "../weather/WeatherList"
import "./event.css"
export const EventCard = ({ event, handleDeleteEvent }) => {
  const [events, setEvents] = useState([])
  const [weather, setWeather] = useState([""])
  const handleDeleteClick = (evt) => {
    let eventDelete = evt.target.id.split("__")[1]
    console.log(eventDelete.split("__")[1])
    handleDeleteEvent(eventDelete)
  }

  const handleShowWeather = (evt) => {
    getWeatherForecast().then((data) => showWeather(data)).then(setWeather)
  }

  return (<>
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-eventName">{event.eventName}</span></h3>
        <p>Date: {event.date}</p>
        <h4>Location: {event.location}</h4>
        <section>
          <button onClick={handleShowWeather} id={"weatherId__" + event.id}>
          Show Weather
        </button>
          <button id={"editId__" + event.id}>
            Edit
        </button>
          <button id={"deleteId__" + event.id} onClick={handleDeleteClick}>
            Delete
        </button>
        </section>
      </div>
      <div id="weather">{weather}</div>
    </div>)
  </>)
}
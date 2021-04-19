import React, { useEffect, useState } from "react"
import { getWeatherForecast } from "../../modules/WeatherManager"
import { showWeather } from "../weather/WeatherList"
import {Link} from "react-router-dom"
import "./event.css"
export const EventCard = ({ event, handleDeleteEvent }) => {
  const [events, setEvents] = useState([])
  const [weather, setWeather] = useState([""])


  const handleShowWeather = (evt) => {
    getWeatherForecast().then((data) => showWeather(data)).then(setWeather)
  }

  return (<>
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-eventName">{event.eventName}</span></h3>
        <p>Date: {event.eventDate}</p>
        <h4>Location: {event.city}, {event.state}</h4>
        <section>
          <button onClick={handleShowWeather} id={"weatherId__" + event.id}>
          Show Weather
        </button>
        <Link to={`/events/${event.id}/edit`}>
          <button>Edit</button>
          </Link>
          <button id={"deleteId__" + event.id} onClick={()=>{handleDeleteEvent(event.id)}}>
            Delete
        </button>
        </section>
      </div>
      <div id="weather">{weather}</div>
    </div>
  </>)
}
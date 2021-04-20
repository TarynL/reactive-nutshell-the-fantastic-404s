import React, { useEffect, useState } from "react"
import { getWeatherByDay } from "../../modules/WeatherManager"
import { showWeatherSingleDay } from "./WeatherList"
import '../home.css'

export const GetHomeWeather = () => {
    const [weather, setWeather] = useState([""])
    const getWeather = () => {
        getWeatherByDay().then((data) => showWeatherSingleDay(data, 0))
            .then(setWeather)
    }
    useEffect(() => {
        getWeather();
    }, [])
    return (<>
        <section className="item5_weather">
            <div className="header"><h3>Today's Weather </h3></div>
            <div className="homeWeather">{weather}</div>
        </section>

    </>)
}

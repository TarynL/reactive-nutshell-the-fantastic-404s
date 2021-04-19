import React, { useEffect, useState } from "react"
import { getWeatherByDay } from "../../modules/WeatherManager"
import { showWeatherSingleDay } from "./WeatherList"
import { WeatherCard } from "./WeatherCard"
export const GetHomeWeather = () => {
    const [weather, setWeather] = useState([""])
    const getWeather = () => {
        getWeatherByDay().then((data) => showWeatherSingleDay(data, 0))
            .then(setWeather)
    }
    useEffect(() => {
        getWeather();
    }, [])
    console.log(weather, "weather")
    return (<>
        <section className="item5_weather">
            <div>Today's Weather </div>
            <div>{weather}</div>
        </section>

    </>)
}

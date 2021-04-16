import React from "react"

export const WeatherCard = ( {forecast} ) => {
    //   ***  UNIX timestamp for each day declared for manipulation
    const timestamp = forecast.dt;
    //   ***  date declared as new Javascript DATE object (adding milliseconds)
    const date = new Date(timestamp * 1000);
    //   ***   list Forecast HTML Template  ***   //
    return (<>
        <div className="weatherDay">
            <div>
                <img className="icon" src="http://openweathermap.org/img/wn/{forecast.weather[0].icon}.png" />
            </div>
            <div>
                {date.toLocaleString("en-US", { weekday: "short" }) // Mon Tue... Sun
                    .toUpperCase()} {(date.getHours()%12 === 0 ? "A.M.":"P.M.")}

                <div>{date.getMonth() + 1}/{date.getDate()}</div>
                <div>{forecast.main.temp_max.toFixed(0)}&#8457;</div>
                <div>{forecast.main.temp_min.toFixed(0)}&#8457; </div>
                <div>{forecast.weather[0].description.toUpperCase()}</div>
            </div>
        </div>
    </>)

}
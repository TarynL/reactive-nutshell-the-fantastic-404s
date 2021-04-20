import React from "react"
import "../events/event.css"

export const showWeatherSingleDay = (forecast, dayCount) => {
    let day = forecast.daily[dayCount]
    const timestamp = day.dt ;
    const date = new Date(timestamp * 1000);
    return (<>
        <div className="weatherDay">
            <img className="icon" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weatherIcon" />
            <div className="Weather Details">
                <div>Date: {date.getMonth() + 1}/{date.getDate() }</div>
                <div>High: {day.temp.max.toFixed(0)}</div>
                <div>Low: {day.temp.min.toFixed(0)}</div>
            </div>
        </div>
    </>)
}



// export const showWeather = (forecast) => {
//     return (<>
//         {/* map over forecast being passed in, if hours
//         is greater then 12 then display that day, do nothing */}
//         {forecast.list.map((day, index) => {
//             const timestamp = day.dt;
//             const date = new Date(timestamp * 1000);
//             return ((index % 4 === 0) ? (
//                 <div className="weatherDay">

//                     <div>
//                         <img className="icon" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weatherIcon" />
//                         {date.toLocaleString("en-US", { weekday: "short" }) // Mon Tue... Sun
//                             .toUpperCase()}
//                     </div>
//                     <div className="weatherDateGroup">
//                         <div>
//                             <div>{date.getMonth() + 1}/{date.getDate()}</div>
//                             <div>{day.main.temp_max.toFixed(1)}&#8457;</div>
//                             <div>{day.main.temp_min.toFixed(1)}&#8457;</div>
//                         </div>
//                         <div className="am_pm">
//                             {date.getHours() < 12 ? "A.M." : "P.M."}
//                         </div>
//                     </div>
//                     <br></br>
//                     <div>{day.weather[0].description.toUpperCase()}</div>
//                 </div>)
//                 : "")
//         })}
//     </>)
// }

//   ***  Create array to hold a copy of weather data  ***   //
let weatherData = [];
//   ***  Function to return a copy of weather data array   ***  //
export const useWeatherData = () => {
    return [...weatherData]
}

//   ***  Function to Fetch 7 day forecast from OpenWeather onecall API  
//        ***  passing in latitude and longitude as parameters
export const getWeatherForecast = () => {
  return fetch(`
  https://api.openweathermap.org/data/2.5/forecast?zip=37042&units=imperial&exclude=minutely,hourly&appid=83431996ca7c14c1090007f6507e1592`).then((response) => response.json())
    .then(data => {
        weatherData = data;
        return data; //   ***  Parsed array returned  ***   //
    })
};

export const getWeatherByDay = ()=>{
    return fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=36.16&lon=-86.77&units=imperial&exclude=minutely,hourly&appid=83431996ca7c14c1090007f6507e1592`).then((response) => response.json())
    .then(data => {
        weatherData = data;
        return data; //   ***  Parsed array returned  ***   //
    })
}
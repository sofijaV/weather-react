import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [day, setDay] = useState(null);
  function handleResponse(response) {
    setDay(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast row mt-4">
        {day.map(function (forecastDay, index) {
          if (index < 5) {
            return (
              <div className="col day" key={index}>
                <div className="WeatherForecast-day">
                  {forecastDay.temp.day}
                </div>
                <div>
                  <WeatherIcon
                    code={forecastDay.weather[0].icon}
                    size={40}
                    color="white"
                  />
                </div>
                <div className="WeatherForecast-temperature">
                  <span className="WeatherForecast-temperature-max">
                    {forecastDay.temp.max}
                  </span>
                  <span className="WeatherForecast-temperature-min">
                    {forecastDay.temp.min}
                  </span>
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let key = "6c8c6f63dce062a0b5a3b082e9b52d3a";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}

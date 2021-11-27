import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
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
          if (index < 4) {
            return (
              <div className="col day" key={index}>
                <WeatherForecastDay forecast={forecastDay} />
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

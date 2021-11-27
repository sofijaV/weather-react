import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div>
        <WeatherIcon
          code={props.forecast.weather[0].icon}
          size={40}
          color="#6d6d71"
        />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.forecast.temp.max)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.forecast.temp.min)}°
        </span>
      </div>
    </div>
  );
}

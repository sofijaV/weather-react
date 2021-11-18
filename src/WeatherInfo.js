import React from "react";
import "./WeatherInfo.css";
import Time from "./Time.js";
export default function WeatherInfo(props) {
  return (
    <div>
      <h1>
        {props.data.name}{" "}
        <img
          className="main"
          src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          alt="weather-icon"
        />
      </h1>
      <ul>
        <li>
          <Time />
        </li>
        <div className="mainData">
          <li>{props.data.description}</li>
          <li>{props.data.temperature}°C</li>
        </div>
        <div className="AdditionalInfo">
          <li>
            High: <strong> {props.data.high} ° </strong>| Low:{" "}
            <strong>{props.data.low} °</strong>{" "}
          </li>
          <li>
            Humidity: <strong>{props.data.humidity}%</strong>{" "}
          </li>
          <li>
            Wind speed: <strong>{props.data.wind}km/h </strong>
          </li>
        </div>
      </ul>
    </div>
  );
}

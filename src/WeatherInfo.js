import React, { useState } from "react";
import "./WeatherInfo.css";
import Time from "./Time.js";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.name}{" "}
        <img
          className="main"
          src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
          alt="weather-icon"
        />
      </h1>
      <ul>
        <div className="mainData">
          <WeatherTemperature celsius={props.data.temperature} />
          <li>{props.data.description}</li>
        </div>
        <div className="AdditionalInfo">
          <li>
            Humidity: <strong>{props.data.humidity}%</strong>{" "}
          </li>
          <li>
            Wind speed: <strong>{props.data.wind}km/h </strong>
          </li>
        </div>
        <br></br>
        <li>
          <Time />
        </li>
      </ul>
    </div>
  );
}

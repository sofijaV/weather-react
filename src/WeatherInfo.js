import React, { useState } from "react";
import "./WeatherInfo.css";
import Time from "./Time.js";
export default function WeatherInfo(props) {
  const [temperature, setTemperature] = useState(
    <li>
      {props.data.temperature}
      <a href="#" onClick={convertToCelsius}>
        <span className="active">°C | </span>
      </a>{" "}
      <a href="#" onClick={convertToFahrenheit}>
        °F
      </a>
    </li>
  );
  function convertToFahrenheit(event) {
    event.preventDefault();
    setTemperature(
      <li>
        {Math.round((props.data.temperature * 9) / 5 + 32)}
        <a href="#" onClick={convertToCelsius}>
          °C
        </a>{" "}
        <a href="#" onClick={convertToFahrenheit}>
          <span className="active">| °F</span>
        </a>
      </li>
    );
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setTemperature(
      <li>
        {props.data.temperature}
        <a href="#" onClick={convertToCelsius}>
          <span className="active">°C | </span>
        </a>{" "}
        <a href="#" onClick={convertToFahrenheit}>
          °F
        </a>
      </li>
    );
  }
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
          {temperature}
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

import React from "react";
import "./WeatherInfo.css";
import Time from "./Time.js";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon.js";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        {props.data.name}{" "}
        <span className="p-4">
          <WeatherIcon code={props.data.icon} size={70} color={"#FD8664"} />
        </span>
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
            Wind speed: <strong>{props.data.wind} km/h </strong>
          </li>
          <li>
            <Time />
          </li>
        </div>
      </ul>
    </div>
  );
}

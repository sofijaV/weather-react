import React from "react";
import "./WeatherInfo.css";

export default function WeatherTemperature(props) {
  return (
    <li>
      {props.celsius}
      <span className="units">°C</span>
    </li>
  );
}

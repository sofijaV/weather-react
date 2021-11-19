import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <li>
        {props.celsius}
        <a href="#" onClick={convertToCelsius}>
          <span className="active">°C | </span>
        </a>{" "}
        <a href="#" onClick={convertToFahrenheit}>
          °F
        </a>
      </li>
    );
  } else {
    return (
      <li>
        {Math.round((props.celsius * 9) / 5 + 32)}
        <a href="#" onClick={convertToCelsius}>
          °C
        </a>{" "}
        <a href="#" onClick={convertToFahrenheit}>
          <span className="active">| °F</span>
        </a>
      </li>
    );
  }
}

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
        <span className="units">
          <span onClick={convertToCelsius} className="active">
            °C |
          </span>
          <span onClick={convertToFahrenheit}>°F</span>
        </span>
      </li>
    );
  } else {
    return (
      <li>
        {Math.round((props.celsius * 9) / 5 + 32)}
        <span className="units">
          <span onClick={convertToCelsius}>°C</span>{" "}
          <span onClick={convertToFahrenheit} className="active">
            | °F
          </span>
        </span>
      </li>
    );
  }
}

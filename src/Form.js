import axios from "axios";
import React, { useState } from "react";
import "./Form.css";
import planet from "./planet.png";

export default function Form() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [overview, setOverview] = useState(null);
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let key = "6c8c6f63dce062a0b5a3b082e9b52d3a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(url).then(getData);
  }
  function getData(response) {
    setLoaded(true);
    let Data = {
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      name: response.data.name,
      high: Math.round(response.data.main.temp_max),
      low: Math.round(response.data.main.temp_min),
    };
    setOverview(
      <div>
        <h1>
          {Data.name}{" "}
          <img
            className="main"
            src={`http://openweathermap.org/img/wn/${Data.icon}@2x.png`}
            alt="weather-icon"
          />
        </h1>
        <ul>
          <div className="mainData">
            <li>{Data.description}</li>
            <li>{Data.temperature}°C</li>
          </div>
          <div className="AdditionalInfo">
            <li>
              High: <strong> {Data.high} ° </strong>| Low:{" "}
              <strong>{Data.low} °</strong>{" "}
            </li>
            <li>
              Humidity: <strong>{Data.humidity}%</strong>{" "}
            </li>
            <li>
              Wind speed: <strong>{Data.wind}km/h </strong>
            </li>
          </div>
        </ul>
      </div>
    );
  }
  let form = (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Enter city name..."
              onChange={updateCity}
            ></input>
          </div>

          <div className="col-md-6">
            <button type="submit" className="btn btn-outline-secondary">
              Search
            </button>
          </div>
        </div>
      </form>
      <hr />
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        {overview}
        <footer className="text-center">
          Open source-code on Github by Sofija
        </footer>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <h1>Where in the world are you?</h1>
        <img src={planet} alt="Planet-Earth" className="planetBig" />
        <footer className="text-center">
          Open source-code on Github by Sofija
        </footer>
      </div>
    );
  }
}

import axios from "axios";
import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
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
    setLoaded(
      <div className="row">
        <div className="col-7">
          <h1>
            <span>{Data.name} </span>
            <span> {Data.temperature}°C</span>
          </h1>
          <ul>
            <li>{Data.description}</li>
            <li>
              High {Data.high}° | Low {Data.low}°{" "}
            </li>
            <li>Humidity: {Data.humidity}% </li>
            <li>Wind speed: {Data.wind}km/h </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Enter city name..."
              onChange={updateCity}
            ></input>
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-outline-secondary">
              Search
            </button>
          </div>
          <div className="col-md-5">
            <button type="button" className="btn btn-outline-secondary">
              My Location
            </button>
          </div>
        </div>
      </form>
      {loaded}
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";
import "./Form.css";
import planet from "./planet.png";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Form() {
  const [city, setCity] = useState(null);
  const [info, setInfo] = useState({ loaded: false });
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
    setInfo({
      loaded: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      name: response.data.name,
    });
  }
  let form = (
    <div className="Form">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="Enter city name..."
          autoFocus="on"
          onChange={updateCity}
        ></input>
        <button type="submit" className="btn btn-outline-secondary">
          Search
        </button>
      </form>
    </div>
  );

  if (info.loaded) {
    return (
      <div>
        {form}
        <WeatherInfo data={info} />
        <WeatherForecast coordinates={info.coordinates} />
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <h1>Where are you at?</h1>
        <h2>CHECK CURRENT WEATHER</h2>
        <img src={planet} alt="Planet-Earth" className="planet img-fluid" />
      </div>
    );
  }
}

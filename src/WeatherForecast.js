import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let key = "6c8c6f63dce062a0b5a3b082e9b52d3a";
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
  axios.get(url).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row mt-4">
        <div className="col day">
          <div className="WeatherForecast-day">Monday</div>
          <div>
            <WeatherIcon code={"01d"} size={40} color={"#6d6d71"} />
          </div>
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

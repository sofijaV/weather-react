import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row mt-5">
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

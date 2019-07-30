import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import getIcon from "../utils/getIcon";

const moment = require("moment");

const defaults = {
  icon: "CLEAR_DAY",
  color: "white",
  size: 50,
  animate: true
};

const Forecast = ({ cityForecast }) => {
  const forecast = cityForecast.slice(1);
  const template = forecast.length ? (
    forecast.map(data => {
      let dayNum = moment(data.Date).format("D");
      let month = moment(data.Date).format("MMM");
      let day = moment(data.Date).format("ddd");
      let iconId = getIcon(data.Day.Icon);

      return (
        <div className="sidebar__box" key={data.EpochDate}>
          <div className="sidebar__date">
            <span>{day}</span>
            <span>
              {dayNum} {month}
            </span>
          </div>
          <div>
            <ReactAnimatedWeather
              icon={iconId}
              color={defaults.color}
              size={defaults.size}
              animate={defaults.animate}
            />
          </div>
          <div className="sidebar__forecast">
            <span>
              {data.Temperature.Minimum.Value} /{" "}
              {data.Temperature.Maximum.Value} °C
            </span>
            <span>{data.Day.IconPhrase}</span>
          </div>
        </div>
      );
    })
  ) : (
    <div>LOADING</div>
  );

  return (
    <div>
      <div className="sidebar">
        <h2>Forecasts</h2>
        {template}
      </div>
    </div>
  );
};

export default Forecast;

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

const WeatherCard = props => {
  const city = props.cityWeather;

  const defaults = {
    icon: "CLEAR_DAY",
    color: "white",
    size: 100,
    animate: true
  };

  return (
    <div>
      <h2 className="weather-box__city">London, GB</h2>
      <ReactAnimatedWeather
        icon={defaults.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
      <p className="weather-box__temp">19 °C</p>
      <p className="weather-box__desc">Light Rain</p>
      <p className="weather-box__hum">Humidity : 73%</p>
    </div>
  );
};

export default WeatherCard;

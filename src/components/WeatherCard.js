import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import getIcon from "../utils/getIcon";

const WeatherCard = ({ cityInfo, cityWeather }) => {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "white",
    size: 100,
    animate: true
  };

  if (cityInfo.length && cityWeather.length) {
    let iconID = getIcon(cityWeather[0].WeatherIcon);

    return (
      <div>
        <h2 className="weather-box__city">
          {cityInfo[0].EnglishName} , {cityInfo[0].Country.ID}
        </h2>
        <ReactAnimatedWeather
          icon={iconID}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
        <p className="weather-box__temp">
          {cityWeather[0].Temperature.Metric.Value} °C
        </p>
        <p className="weather-box__desc">{cityWeather[0].WeatherText}</p>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default WeatherCard;

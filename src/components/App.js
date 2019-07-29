import React from "react";
import "./App.scss";
import AddCity from "./AddCity";
import WeatherCard from "./WeatherCard";
import {
  weatherLocation,
  weatherData,
  weatherForecast
} from "../api/weatherApi";
import Forecast from "./Forecast";

const KEY = "mGM3TdJw2ez0YnuGGXfpk2Qo3sZg8iD7";

class App extends React.Component {
  state = {
    cityInfo: [],
    cityWeather: [],
    cityForecast: []
  };

  componentDidMount() {
    this.addCity("London");
  }

  addCity = e => {
    weatherLocation
      .get("/cities/search", {
        params: { apikey: KEY, q: e }
      })
      .then(response => {
        let locationInfo = response.data[0];
        let data = [{ ...locationInfo }];
        this.setState({ cityInfo: data });
        this.getWeatherData(locationInfo.Key);
      });
  };

  getWeatherData = locationKey => {
    weatherData
      .get(locationKey, {
        params: { apikey: KEY }
      })
      .then(response => {
        let weatherData = response.data[0];
        let data = [{ ...weatherData }];
        this.setState({ cityWeather: data });
      });

    weatherForecast
      .get(locationKey, {
        params: { apikey: KEY, metric: true }
      })
      .then(response => {
        let weatherForecast = response.data.DailyForecasts;
        let data = [...weatherForecast];
        this.setState({ cityForecast: data });
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Weather App</h1>
        <div className="subs">
          <p>Created by Carlo Anselmi</p>
        </div>
        <div className="weather-box">
          <div className="weather-box__today">
            <WeatherCard
              cityWeather={this.state.cityWeather}
              cityInfo={this.state.cityInfo}
            />
            <AddCity addCity={this.addCity} />
          </div>
          <div className="weather-box__forecast">
            <Forecast cityForecast={this.state.cityForecast} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

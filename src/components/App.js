import React from "react";
import "./App.scss";
import AddCity from "./AddCity";
import WeatherCard from "./WeatherCard";
import { weatherLocation, weatherData } from "../api/weatherApi";

const KEY = "mGM3TdJw2ez0YnuGGXfpk2Qo3sZg8iD7";

class App extends React.Component {
  state = {
    cityWeather: []
  };

  addCity = e => {
    weatherLocation
      .get("/cities/search", {
        params: { apikey: KEY, q: e }
      })
      .then(response => {
        this.getWeatherData(response.data[0]);
      });
  };

  getWeatherData = locationData => {
    weatherData
      .get(locationData.Key, {
        params: { apikey: KEY }
      })
      .then(response => {
        let data = [{ ...locationData }, { ...response.data[0] }];
        this.setState({ cityWeather: data });
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Weather App</h1>
        <div className="subs">
          <p>Created by Carlo Anselmi</p>
          <p>Github source code</p>
        </div>
        <div className="weather-box">
          <WeatherCard cityWeather={this.state.cityWeather} />
          <AddCity addCity={this.addCity} />
        </div>
      </div>
    );
  }
}

export default App;

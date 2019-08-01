import axios from "axios";

export const weatherLocation = axios.create({
  baseURL: "https://dataservice.accuweather.com/locations/v1"
});

export const weatherData = axios.create({
  baseURL: "https://dataservice.accuweather.com/currentconditions/v1/"
});

export const weatherForecast = axios.create({
  baseURL: "https://dataservice.accuweather.com/forecasts/v1/daily/5day/"
});

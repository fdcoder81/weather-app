import axios from "axios";

export const weatherLocation = axios.create({
  baseURL: "http://dataservice.accuweather.com/locations/v1"
});

export const weatherData = axios.create({
  baseURL: "http://dataservice.accuweather.com/currentconditions/v1/"
});

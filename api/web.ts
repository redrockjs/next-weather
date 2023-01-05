import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const ax = axios.create(
  {
    baseURL: "https://api.openweathermap.org/data/2.5/",
    params: {
      appid: API_KEY,
      lang: "ru",
      units: "metric"
    },
  });

export const webAPI = {
  // Get Users list from REST API with params
  getWeatherByCityName(cityName:string) {
    return (
      ax.get(`weather?q=${cityName}`)
        .then((response: { data: any; }) => {
          return response.data
        })
        .catch((e)=>{
          throw new Error(e.message)
        })
    )
  },
  getWeatherByCityId(cityId:number) {
    return (
      ax.get(`weather?id=${cityId}`)
        .then((response: { data: any; }) => {
          return response.data
        })
        .catch((e)=>{
          throw new Error(e.message)
        })
    )
  },
  getWeatherByPosition(lat:number, lon:number) {
    return (
      ax.get(`weather?lat=${lat}&lon=${lon}`)
        .then((response: { data: any; }) => {
          return response.data
        })
        .catch((e)=>{
          throw new Error(e.message)
        })
    )
  }
}
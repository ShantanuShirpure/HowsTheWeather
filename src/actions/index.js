import axios from 'axios';
const API_KEY ='2cda4f1d0d4edcc4876b5b37f293e5cb';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeatcher(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return{
    type  : FETCH_WEATHER,
    payload : request
  }
}

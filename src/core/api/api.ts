import axios from "axios"

export const CITIES_API_URL = "http://api.openweathermap.org/geo/1.0"
export const WEATHER_API_URL = "http://api.openweathermap.org/data/2.5"
//@ts-ignore
export const KEY = import.meta.env.VITE_KEY

export const CITIES_API = axios.create({
    baseURL: CITIES_API_URL,
    
})

export const WEATHER_API = axios.create({
    baseURL: WEATHER_API_URL,
})
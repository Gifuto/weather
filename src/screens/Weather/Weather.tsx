import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useSearchParams } from "react-router-dom"

import { RootState } from "../../modules"

import { weatherActions } from "../../modules/weather/slice"
import { getWeatherById } from "../../modules/weather/selector"

import { Container, Line } from "./styled"

export const Weather = () => {
    const dispatch = useDispatch()

    const { id } = useParams()

    const [searchParams] = useSearchParams()
    
    const weather = useSelector((state: RootState) => getWeatherById(state, id ?? ""))

    useEffect(() => {
        const coord = {
            lat: searchParams.get("lat") ?? "",
            lon: searchParams.get("lon") ?? ""
        }

        if (!weather) {
            dispatch(weatherActions.requestWeather({ ...coord, id: id ?? "" }))
        }
    }, [weather])

    if (!weather) {
        return <>Loading...</>
    }

    //const round = Math.round

    const time = new Date((weather?.sys?.sunrise + weather?.timezone) * 1000)

    return (
        <Container>
            <Line>City, Country: {weather?.name}, {weather?.sys?.country}</Line>
            <Line>Temperature: {Math.round(weather?.main?.temp)}°C</Line>
            <Line>Feels Like: {Math.round(weather?.main?.feels_like)}°C</Line>
            <Line>Weather: {weather?.weather[0]?.description}</Line>
            <Line>Wind Speed: {Math.round(weather?.wind?.speed)} km/h</Line>
            <Line>Time: {time.getHours()}:{time.getMinutes()}</Line>
        </Container>
    )
}
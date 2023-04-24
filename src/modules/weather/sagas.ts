import { call, put, takeLatest } from "redux-saga/effects";

import { KEY, WEATHER_API } from "../../core/api/api";

import { weatherActions } from "./slice";

// @ts-ignore
function* getWeather({ payload: { id, lat, lon, navigate } }) {
    //@ts-ignore
    try {
        // @ts-ignore
        const response = yield call(
            WEATHER_API.get,
            `/weather?lat=${lat}&lon=${lon}&units=metric&appid=${KEY}`
        );

        const updatedWeather = { ...response.data, id, name: id } 

        yield put(weatherActions.setWeather(updatedWeather));

        if (navigate) {
            navigate(`/weather/${updatedWeather.id}?lat=${lat}&lon=${lon}`)
        }
    } catch (error) {
        console.error(error);
    }
}

export function* watchGetWeather() {
    // @ts-ignore
    yield takeLatest(weatherActions.requestWeather.type, getWeather);
}

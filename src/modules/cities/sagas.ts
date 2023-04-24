import { call, put, takeLatest } from "redux-saga/effects";

import { CITIES_API, KEY } from "../../core/api/api";

import { citiesActions } from "./slice";

// @ts-ignore
function* getCities({ payload }) {
    try {
        // @ts-ignore
        const response = yield call(
            CITIES_API.get,
            `/direct?q=${payload}&limit=10&appid=${KEY}`
        );

        yield put(citiesActions.setCities(response.data));
    } catch (error) {
        console.error(error);
    }
}

export function* watchGetCities() {
    // @ts-ignore
    yield takeLatest(citiesActions.requestCities.type, getCities);
}

import { useDispatch as useReduxDispatch } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects"

import { citiesSlice, SLICE_NAME as CITIES } from "./cities/slice";
import { watchGetCities as watchGetCitiesSaga } from "./cities/sagas"

import { weatherSlice, SLICE_NAME as WEATHER } from "./weather/slice";
import { watchGetWeather as watchGetWeatherSaga } from "./weather/sagas"

export const rootReducer = combineReducers({
    [CITIES]: citiesSlice.reducer,
    [WEATHER]: weatherSlice.reducer,
});

function* rootSaga() {
    yield all([watchGetCitiesSaga(), watchGetWeatherSaga()])
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export const useDispatch: () => AppDispatch = useReduxDispatch;

export type RootState = ReturnType<typeof store.getState>;

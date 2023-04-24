import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "../../core/api/types";

import { WeatherState, Weather, WeatherRequest } from "./types";


export const SLICE_NAME = "weather"

const initialState: WeatherState = {
    items: [],
    status: REQUEST_STATUS.INITIAL,
}

export const weatherSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        requestWeather: (state, action: PayloadAction<WeatherRequest>) => {
            state.status = REQUEST_STATUS.LOADING
        },
        setWeather: (state, action: PayloadAction<Weather>) => {
            state.status = REQUEST_STATUS.SUCCESS
            state.items.push(action.payload)
        },
    }
})

export const weatherActions = weatherSlice.actions
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { REQUEST_STATUS } from "../../core/api/types";

import { CitiesState, City } from "./types";


export const SLICE_NAME = "cities"

const initialState: CitiesState = {
    items: [],
    status: REQUEST_STATUS.INITIAL,
}

export const citiesSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        requestCities: (state, action: PayloadAction<string>) => {
            state.status = REQUEST_STATUS.LOADING
        },
        setCities: (state, action: PayloadAction<City[]>) => {
            state.status = REQUEST_STATUS.SUCCESS
            state.items = action.payload
        },
        clearCities: (state) => {
            state.status = REQUEST_STATUS.INITIAL
            state.items = []
        }
    }
})

export const citiesActions = citiesSlice.actions
import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

const getId = (_: unknown, id: string) => id;

const getWeathers = (state: RootState) => state.weather.items;

export const getWeatherById = createSelector(
    getWeathers,
    getId,
    (weathers, id) => {
        const weather = weathers?.find(weather => weather.id === id);

        return weather ?? null;
    }
);

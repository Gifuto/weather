import { REQUEST_STATUS } from "../../core/api/types";

export interface Weather {
    id: string;
    name: string;
    city: string;
    coord: {
        lat: number;
        lon: number;
    };
    weather: any;
    wind: {
        speed: number | any;
    }
    main: {
        temp: number | any;
        feels_like: number | any;
    };
    sys: {
        country: string;
        sunrise: number;
    }
    timezone: number;
}

export interface WeatherRequest {
    id: string;
    lat: number | string;
    lon: number | string;
    navigate?: unknown;
}

export interface WeatherState {
    items: Weather[];
    status: REQUEST_STATUS;
}

import { useEffect, ChangeEvent, useState, useCallback } from "react";
import { RootState, useDispatch } from "../../../../modules";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { debounce } from "debounce";

import { Container, Item } from "./styled";

import { citiesActions } from "../../../../modules/cities/slice";
import { weatherActions } from "../../../../modules/weather/slice";

export const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cities = useSelector((state: RootState) => state.cities.items);

    const [inputValue, setInputValue] = useState("");

    const handleSetInputValue = debounce(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(event.target.value),
        500
    );

    const search = useCallback(
        (value: string) => {
            dispatch(citiesActions.requestCities(value));
        },
        [dispatch]
    );

    const clear = useCallback(() => {
        dispatch(citiesActions.clearCities());
    }, [dispatch]);

    const getWeather = (id: string, lat: number, lon: number) => {
        dispatch(weatherActions.requestWeather({ id, lat, lon, navigate }));
    };

    useEffect(() => {
        if (inputValue.trim() === "") {
            clear();
            return;
        }
        if (inputValue) {
            search(inputValue);
        }
    }, [inputValue]);

    return (
        <Container>
            <input placeholder="find city..." onChange={handleSetInputValue} />

            <br />
            {cities?.map((city, i) => (
                <Item
                    key={`${city.name}${i}`}
                    onClick={() => getWeather(city.name, city.lat, city.lon)}
                >
                    {city.name} - {city.lat}/{city.lon}
                </Item>
            ))}
        </Container>
    );
};

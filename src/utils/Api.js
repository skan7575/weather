import getResponseData from "./utils";

const baseLink = 'https://api.openweathermap.org/data/2.5/weather?id=524901&lang=ru&appid=7fca705665fd994b7fe927cb897a4d5f&units=metric';

export const getData = () => {
    return fetch(`${baseLink}`, {
        method: 'GET'
    })
        .then(getResponseData)
}
export const getCity = (city) => {
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=7fca705665fd994b7fe927cb897a4d5f`, {
        method: 'GET'
    })
        .then(getResponseData)
}
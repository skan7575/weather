import React, {useEffect, useState} from 'react';
import './Wetaher.css'
import {getData} from "../../utils/Api";

function Weather(props) {
    const [weatherStatus, setWeatherStatus] = useState('')
    const [metric, setMetric] = useState('')
    const [date, setDate] = useState('')
    const [day, setDay] = useState('')
    const [dayDate, setDayDate] = useState('')
    const [icon, setIcon] = useState('')
    const [location, setLocation] = useState('')
    const [humidity, setHumidity] = useState('')
    const [wind, setWind] = useState('')

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    const month = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ]

    useEffect(() => {
        const date = new Date();
        const n = date.getDay();
        const m = date.getMonth();
        const d = date.getDate()
        setDay(days[n])
        setDate(month[m])
        setDayDate(d)

    }, [])

    useEffect(() => {
        getData()
            .then(res => {
                const arr = res.main
                const weather = Object.values(res.weather).map(item => {
                    return item.description
                })
                const metric = Math.round(Object.keys(arr).map(key => arr[key])[0])
                const icon = Object.values(res.weather).map(item => {
                    return item.icon
                })
                const humidityValue = Object.values(res.main)[5]
                const windValue = Object.values(res.wind)[0]
                console.log(res)
                setWind(windValue)
                setHumidity(humidityValue)
                setIcon(icon)
                setMetric(metric)
                setWeatherStatus(weather)
            })
    }, [])

    return (
        <main className='weather'>
            <div className='weather__container'>
                <div className='weather__info'>
                    <p className='weather__day'>{day}</p>
                    <p className='weather__date'>{`${dayDate} ${date}`}</p>
                    <p className='weather__location'>{location}</p>
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} className='weather__icon' alt=""/>
                    <p className='weather__temp'>{metric} °C</p>
                    <p className='weather__status'>{weatherStatus}</p>
                </div>
            </div>
            <div className='weather__container-two'>
                <div>
                    <p className='weather__text'>Влажность {humidity}%</p>
                    <p className='weather__text'>Скорость Ветра {wind} km/h</p>
                </div>
                <div className='weather__week-container'>
                    <div className="weather__day-box">
                        <img src={icon} alt=""/>
                        <p>{day}</p>
                        <p>{metric}</p>
                    </div>
                    <div className="weather__day-box"></div>
                    <div className="weather__day-box"></div>
                    <div className="weather__day-box"></div>
                </div>
                <button className='weather__button'>Выбрать город</button>
            </div>
        </main>
    );
}

export default Weather;
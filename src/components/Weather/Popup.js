import React, {useState} from 'react';
import {getCity} from "../../utils/Api";

function Popup(props) {
    const [cities, setCities] = useState([])
    const [value, setValue] = useState('')

    const handleChangeInput = (e) => {
        getCity(e.target.value).then(res =>
            setCities(res.map(item => {
                return item
            }))
        )
        setValue(e.target.value)
        // setCities(getCity(e.target.value))

    }
    const arr = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ]
    return (
        <form action="">
            <input list='owner' value={value} type="search" onChange={handleChangeInput}/>
            <datalist id='owner'>
                {cities.map(item => {
                    console.log(item)
                  return <option value={item.name}></option>
                })}


                {/*{arr.map(item => {*/}
                {/*    <option>2</option>*/}
                {/*})}*/}
            </datalist>
        </form>
    );
}

export default Popup;
import React from 'react'
import { useSelector } from 'react-redux'

const LastName = () => {
    const lastName = useSelector((state) => state.user.lastName)  //  useSelector - хук, state -глобальный объект, user.lastName - поле из файла userSlice.js
    return <div className='font-bold'>{lastName}</div>             // на вывод в div помещаем вышесозданную переменную lastname
}


export default LastName

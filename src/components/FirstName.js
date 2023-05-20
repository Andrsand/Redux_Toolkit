import React from 'react'
import { useSelector } from 'react-redux'

const FirstName = () => {
    const name = useSelector((state) => state.user.firstName) //  useSelector - хук, state -глобальный объект, user.firstName - поле из файла userSlice.js
    return <div className='font-bold'>{name}</div>            // на вывод в div помещаем вышесозданную переменную name
}

export default FirstName

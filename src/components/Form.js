import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { v4 } from 'uuid'

const Form = () => {
    const dispatch = useDispatch() // создаем объект dispatch 
    const [todoValue, setTodoValue] = React.useState('') // стейт для текстового поля

    const addTodoHandler = () => { // функция создания todo с соответсвующими полями:
        const todo = {
            id: v4(),              // автоматическое генерирование id с помощью uuid
            text: todoValue,       // в поле text лежит значение из стейта todoValue
            completed: false,
        }
    }
    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Type something...'
                onChange={(e) => setTodoValue(e.target.value)} // при изменении поля формы помещем value в стейт todoValue
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form

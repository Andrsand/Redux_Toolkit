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
        dispatch(addTodo(todo)) // вызываем функцию dispatch с экшном addTodo где параметром будет наша todo
        setTodoValue('') // чистим нашу todo 
    }
    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                value={todoValue} // значение из стейта
                placeholder='Type something...'
                onChange={(e) => setTodoValue(e.target.value)} // при изменении поля формы помещем value в стейт todoValue
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                onClick={() => addTodoHandler()} // вешаем на onClick наш addTodoHandler
            >
                Submit
            </button>
        </form>
    )
}

export default Form

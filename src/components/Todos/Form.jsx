import React, { useState, useContext, useEffect } from 'react';
import TodosContext from './context'
import { ADD_TO_DO, UPDATE_TO_DO } from '../../actions/actions';

export default function AddTodoForm() {
    const [todoValue, setTodo] = useState("");
    const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext)

    useEffect(() => {
        if (currentTodo.text) {
            setTodo(currentTodo.text)
        }
    }, [currentTodo.id])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (currentTodo.text) {
            dispatch({ type: UPDATE_TO_DO, payload: todoValue })
        }
        else {
            dispatch({ type: ADD_TO_DO, payload: todoValue })
            setTodo('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event) => setTodo(event.target.value)} value={todoValue} />
            <button>Add</button>
        </form>
    )
}
import React, { useState, useContext } from 'react';
import TodosContext from './context'
import { ADD_TO_DO } from '../../actions/actions';

export default function AddTodoForm() {
    const [todoValue, setTodo] = useState("");
    const { dispatch } = useContext(TodosContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: ADD_TO_DO, payload: todoValue })
        setTodo('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(event) => setTodo(event.target.value)} value={todoValue} />
            <button>Add</button>
        </form>
    )
}
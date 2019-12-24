import React, { useContext, useReducer } from 'react';

import TodosContext from './context'
import todosReducer from "./reducer";
import TodosList from './List';

const Todos = () => {
    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(todosReducer, initialState);
    return (
        <TodosContext.Provider value={{ state, dispatch }}>
            <TodosList />
        </TodosContext.Provider>
    )
}

export default Todos;
import React, { useContext } from 'react';
import TodosContext from './context'
import { TOGGLE_TO_DO, DELETE_TO_DO, SET_CURRENT_TO_DO } from '../../actions/actions';

export default function TodosList() {
    const { state, dispatch } = useContext(TodosContext)

    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing to do'

    return (
        <React.Fragment>
            <h2>{title}</h2>
            <ul>
                {state.todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            onDoubleClick={() => dispatch({ type: TOGGLE_TO_DO, payload: todo })}>
                            {
                                todo.complete ? <s>{todo.text}</s> : todo.text
                            }
                        </span>
                        <button onClick={() => dispatch({type: SET_CURRENT_TO_DO, payload: todo})}>
                            <img src="https://icon.now.sh/edit/0050c5" alt="Edit icon" />
                        </button>
                        <button onClick={() => dispatch({ type: DELETE_TO_DO, payload: todo })}>
                            <img src="https://icon.now.sh/delete/0050c5" alt="Edit icon" />
                        </button>
                    </li>
                ))}
            </ul>
        </React.Fragment>

    )
}
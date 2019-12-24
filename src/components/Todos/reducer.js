import { TOGGLE_TO_DO, DELETE_TO_DO } from "../../actions/actions";

export default function reducer(state, action) {
    switch (action.type) {
        case TOGGLE_TO_DO:
            const toggledTodos = state.todos.map(t => t.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete } : t)
            return {
                ...state,
                todos: toggledTodos
            }
        case DELETE_TO_DO:
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
            return {
                ...state,
                todos: filteredTodos
            }
        default:
            return state
    }
}
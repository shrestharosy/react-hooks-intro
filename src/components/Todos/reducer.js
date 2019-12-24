import { TOGGLE_TO_DO, DELETE_TO_DO, ADD_TO_DO, SET_CURRENT_TO_DO, UPDATE_TO_DO } from "../../actions/actions";
import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
    switch (action.type) {
        case ADD_TO_DO:
            const newTodo = {
                id: uuidv4(),
                text: action.payload,
                complete: false
            }
            const addedTodos = [...state.todos, newTodo]
            return {
                ...state,
                todos: addedTodos
            }
        case SET_CURRENT_TO_DO:
            return {
                ...state,
                currentTodo: action.payload
            }
        case UPDATE_TO_DO:
            const updatedTodo = { ...state.currentTodo, text: action.payload }
            const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id)
            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ]
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            }
        case TOGGLE_TO_DO:
            const toggledTodos = state.todos.map(t => t.id === action.payload.id ? { ...action.payload, complete: !action.payload.complete } : t)
            return {
                ...state,
                todos: toggledTodos
            }
        case DELETE_TO_DO:
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id);
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo
            return {
                ...state,
                currentTodo: isRemovedTodo,
                todos: filteredTodos
            }
        default:
            return state
    }
}
import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {
                count: state.count + 1
            }
        case "decrement":
            return{
                count: state.count -1
            }
        default:
            return initialState
    }
}

export default function CountReducer() {
    const [state, dispatch] = useReducer(reducer, initialState) // returns updated state
    return (
        <div>
            <h1>CountReducer</h1>
            Count: {state.count}<br/>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>

        </div>
    )
}
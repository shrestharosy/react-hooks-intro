import React from 'react';

const TodosContext = React.createContext(
    {
        todos: [
            {
                id: 1, text: 'Complete react hooks', complete: false
            },
            {
                id: 2, text: 'Write an article', complete: false
            },
            {
                id: 3, text: 'Do something', complete: true
            }
        ]
    }
)

export default TodosContext;
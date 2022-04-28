import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice ({
    name: 'todoList',
    initialState: [
        {
            id: 1,
            name: 'Learn React',
            priority: 'High',
            completed: false
        },
        {
            id: 2,
            name: 'Learn Redux',
            priority: 'Medium',
            completed: false
        },
        {
            id: 3,
            name: 'Learn JavaScript',
            priority: 'Low',
            completed: true
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodo: (state, action) => {
            const currTodo = state.find(todo => todo.id === action.payload)
            currTodo.completed = !currTodo.completed
        }
    }
})

export default todoListSlice
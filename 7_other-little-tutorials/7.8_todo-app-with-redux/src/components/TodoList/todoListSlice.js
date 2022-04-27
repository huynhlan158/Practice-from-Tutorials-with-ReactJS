const initState = [
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
]

const todoListSlice = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return [...state, action.payload]
        case 'todoList/toggleTodo':
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        default: 
            return state
    }
}

export default todoListSlice
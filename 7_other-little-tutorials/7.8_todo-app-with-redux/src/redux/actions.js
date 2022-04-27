export const addTodo = newTodo => {
    return {
        type: 'todoList/addTodo',
        payload: newTodo
    }
}

export const toggleTodo = todoId => {
    return {
        type: 'todoList/toggleTodo',
        payload: todoId
    }
}

export const textSearchChange = textSearch => {
    return {
        type: 'filters/textSearchChange',
        payload: textSearch
    }
}

export const filteredStatusChange = status => {
    return {
        type: 'filters/filteredStatusChange',
        payload: status
    }
}

export const filteredPriorityChange = priority => {
    return {
        type: 'filters/filteredPriorityChange',
        payload: priority
    }
}
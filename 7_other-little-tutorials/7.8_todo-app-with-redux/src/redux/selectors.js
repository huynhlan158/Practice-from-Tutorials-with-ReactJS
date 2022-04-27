import { createSelector } from 'reselect'

const todoListSelector = state => state.todoList
const textSearchSelector = state => state.filters.searchText
const filterStatusSelector = state => state.filters.status
const filterPrioritySelector = state => state.filters.priority

export const filteredTodoListSelector = createSelector (
    todoListSelector,
    filterStatusSelector,
    filterPrioritySelector,
    textSearchSelector,
    (todoList, status, priority, textSearch) => {
        return todoList.filter(todo => {
            if (status === 'All' && priority.length === 0) {
                return todo.name.toLowerCase().includes(textSearch.toLowerCase())
            }

            return (
                todo.name.toLowerCase().includes(textSearch.toLowerCase()) &&
                (status === 'All' ? todo.completed || !todo.completed : status === 'Completed' ? todo.completed : !todo.completed) &&
                (priority.length === 0 ? todo.priority : priority.includes(todo.priority) ? todo.priority : undefined)
            )
        })
    }
) 

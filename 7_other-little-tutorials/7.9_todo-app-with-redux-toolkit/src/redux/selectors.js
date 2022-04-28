import { createSelector } from '@reduxjs/toolkit'

const todoListSelector = state => state.todoList
const filteredSearchSelector = state => state.filters.search
const filteredStatusSelector = state => state.filters.status
const filteredPrioritySelector = state => state.filters.priority

const filteredTodoListSelector = createSelector(
    todoListSelector,
    filteredSearchSelector,
    filteredStatusSelector,
    filteredPrioritySelector,
    (todoList, searchText, status, priority) => {
        return todoList.filter(todo => {
            if (status === 'All' && priority.length === 0) {
                return todo.name.toLowerCase().includes(searchText.toLowerCase())
            }

            return todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
            (status === 'All' ? todo.completed || !todo.completed : status === 'Completed' ? todo.completed : !todo.completed) &&
            (priority.length === 0 ? todo.priority : priority.includes(todo.priority))
        })
    }
)

export {filteredTodoListSelector}
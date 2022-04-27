const initState = {
    searchText: '',
    status: 'All',
    priority: []
}

const filtersSlice = (state = initState, action) => {
    switch (action.type) {
        case 'filters/textSearchChange': 
            return {
                ...state,
                searchText: action.payload
            }
        case 'filters/filteredStatusChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filters/filteredPriorityChange':
            return {
                ...state,
                priority: action.payload
            }
        default: 
            return state
    }
}

export default filtersSlice
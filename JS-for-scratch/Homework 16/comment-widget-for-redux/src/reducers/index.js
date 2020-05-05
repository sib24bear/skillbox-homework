
const comments = (state=[], action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [{
                id: action.id, 
                name: action.name, 
                comment: action.comment,
                date: action.date,
                dateTime: action.dateTime
            }, ...state]
        
        case 'REMOVE_COMMENT':
            return state.filter(item => item.id !== action.id)

        default: return state;
    }
}

export default comments;
import { v4 } from 'node-uuid'

export const addComment = (name, comment) => {
    return {
        type: 'ADD_COMMENT',
        id: v4(),
        name,
        comment,
        date: new Date().toLocaleString(),
        dateTime: new Date().toISOString()
    }
}

export const removeComment = (id) => {
    return {
        type: 'REMOVE_COMMENT',
        id
    }
}
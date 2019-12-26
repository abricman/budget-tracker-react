import { userActionsTypes } from '../../constants'

/* const INITIAL_STATE = {
    token: null,
    user: null
} */
const INITIAL_STATE = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGJjMjc4YTBhMWFhZTFkYjg1ZTcxNTYiLCJpYXQiOjE1NzI2MTIxOTR9.0L9-o0ygxU7ltBXQOW3DE2sMp6IkKQAY4NXl2J7vIP0',
    user: {
        firstName: "Andrej",
        lastName: "Bricman",
        email: "bricman15@hotmail.com"
    }
}

export default (auth = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case userActionsTypes.SIGN_UP: 
            return action.payload
        case userActionsTypes.SIGN_IN: 
            return action.payload
        case userActionsTypes.SIGN_OUT: 
            return action.payload
        default: 
            return auth
    }
}
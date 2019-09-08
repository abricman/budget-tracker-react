import { userConstants } from '../../constants'

const INITIAL_STATE = {
    token: null,
    user: null
}

export default (auth = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case userConstants.SIGN_UP: 
            return action.payload
        case userConstants.SIGN_IN: 
            return action.payload
        case userConstants.SIGN_OUT: 
            return null
        default: 
            return auth
    }
}
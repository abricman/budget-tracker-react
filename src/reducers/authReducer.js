import { 
    SIGN_UP, 
    SIGN_IN, 
    SIGN_OUT 
} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: false,
    user: null
}

export default (auth = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP: 
            return action.payload
        case SIGN_IN: 
            return action.payload
        case SIGN_OUT: 
            return null
        default: 
            return auth
    }
}
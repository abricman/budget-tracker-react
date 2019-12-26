import { walletsActionTypes } from '../../constants'

const INITIAL_STATE = []

export default (wallets = INITIAL_STATE, action = {}) => {
    if (action.error) return wallets
    
    switch (action.type) {
        case walletsActionTypes.REQUEST_GET_WALLETS_FINISHED: 
            return action.payload
        default: 
            return wallets
    }
}
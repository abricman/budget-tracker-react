import { currenciesActionTypes } from '../../constants'

const INITIAL_STATE = []

export default (currencies = INITIAL_STATE, action = {}) => {
    if (action.error) return currencies
    
    switch (action.type) {
        case currenciesActionTypes.REQUEST_GET_CURRENCIES_FINISHED: 
            return action.payload
        default: 
            return currencies
    }
}
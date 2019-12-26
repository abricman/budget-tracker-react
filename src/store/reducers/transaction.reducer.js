import { transactionsActionTypes } from '../../constants'

const INITIAL_STATE = null

export default (transactions = INITIAL_STATE, action = {}) => {
    if (action.error) return transactions
    
    switch (action.type) {
        case transactionsActionTypes.REQUEST_GET_TRANSACTIONS_FINISHED: 
            return action.payload
        case transactionsActionTypes.ADD: 
            return action.payload
        case transactionsActionTypes.DELETE:
            return action.payload
        default: 
            return transactions
    }
}
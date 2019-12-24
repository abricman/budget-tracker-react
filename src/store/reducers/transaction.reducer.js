import { transactionConstants } from '../../constants'

const INITIAL_STATE = null

export default (transactions = INITIAL_STATE, action = {}) => {
    if (action.error) return transactions
    
    switch (action.type) {
        case transactionConstants.REQUEST_GET_TRANSACTIONS_FINISHED: 
            return action.payload
        case transactionConstants.ADD: 
            return action.payload
        case transactionConstants.DELETE:
            return action.payload
        default: 
            return transactions
    }
}
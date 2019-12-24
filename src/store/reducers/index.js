import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth.reducer'
import transactionReducer from './transaction.reducer'
import requestingReducer from './requesting.reducer'
import errorReducer from './error.reducer'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    transactionsModel: transactionReducer,
    requesting: requestingReducer,
    error: errorReducer
})

export default createRootReducer
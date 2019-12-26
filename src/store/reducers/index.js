import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth.reducer'
import transactionReducer from './transaction.reducer'
import requestingReducer from './requesting.reducer'
import errorReducer from './error.reducer'
import categoriesReducer from './categories.reducer'
import walletsReducer from './wallets.reducer'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    transactionsModel: transactionReducer,
    requesting: requestingReducer,
    error: errorReducer,
    categories: categoriesReducer,
    wallets: walletsReducer
})

export default createRootReducer
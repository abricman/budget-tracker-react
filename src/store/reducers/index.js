import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './auth.reducer'
import transactionsReducer from './transactions.reducer'
import requestingReducer from './requesting.reducer'
import errorReducer from './error.reducer'
import categoriesReducer from './categories.reducer'
import walletsReducer from './wallets.reducer'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    transactionsModel: transactionsReducer,
    requesting: requestingReducer,
    error: errorReducer,
    categories: categoriesReducer,
    wallets: walletsReducer
})

export default createRootReducer
import { transactionsActionTypes } from '../../constants'
import { transactionsService } from '../../services'

export const handleTransactionAdd = (transaction) => async(dispatch, getState) => {
    dispatch({ type: transactionsActionTypes.REQUEST_ADD_TRANSACTION })
    transaction.userId = getState().auth.user._id
    const result = await transactionsService.transactionAdd(transaction)
    dispatch({ type: transactionsActionTypes.REQUEST_ADD_TRANSACTION_FINISHED, payload: result, error: result.error })
    return result
}

export const handleGetTransactions = (year, month) => async (dispatch) => {
    dispatch({ type: transactionsActionTypes.REQUEST_GET_TRANSACTIONS })
    const result = await transactionsService.getTransactions(year, month)
    dispatch({ type: transactionsActionTypes.REQUEST_GET_TRANSACTIONS_FINISHED, payload: result, error: result.error })
}
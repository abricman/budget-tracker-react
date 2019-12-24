import { push } from 'connected-react-router'
import { transactionConstants } from '../../constants'
import { transactionsService } from '../../services'

export const transactionAdd = (transaction) => {
    return {
        type: transactionConstants.ADD,
        payload: {
            transaction
        }
    }
}

export const handleTransactionAdd = transaction => async(dispatch, getState) => {
    const userId = '5d6be50f15baaa43d8bb30c0' //getState().auth.user.id
    const returnVal = await transactionsService.transactionAdd(transaction)
    dispatch(transactionAdd(transaction))
    //dispatch(push('/home'))
}

export const handleGetTransactions = (year, month) => async (dispatch, getState) => {
    dispatch({ type: transactionConstants.REQUEST_GET_TRANSACTIONS })
    const result = await transactionsService.getTransactions(year, month)
    dispatch({ type: transactionConstants.REQUEST_GET_TRANSACTIONS_FINISHED, payload: result, error: result.error })
}
import { currenciesActionTypes } from '../../constants'
import { currenciesService } from '../../services'

export const handleGetCurrencies = () => async(dispatch, getState) => {
    dispatch({ type: currenciesActionTypes.REQUEST_GET_CURRENCIES })
    const result = await currenciesService.getCurrencies()
    dispatch({ type: currenciesActionTypes.REQUEST_GET_CURRENCIES_FINISHED, payload: result, error: result.error })
}
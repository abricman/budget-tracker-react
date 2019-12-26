import { walletsActionTypes } from '../../constants'
import { walletsService } from '../../services'

export const handleGetWallets = () => async(dispatch, getState) => {
    dispatch({ type: walletsActionTypes.REQUEST_GET_WALLETS })
    const result = await walletsService.getWallets()
    dispatch({ type: walletsActionTypes.REQUEST_GET_WALLETS_FINISHED, payload: result, error: result.error })
}
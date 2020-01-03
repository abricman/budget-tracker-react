import { walletsActionTypes } from '../../constants'
import { walletsService } from '../../services'

export const handleWalletAdd = (wallet) => async(dispatch, getState) => {
    dispatch({ type: walletsActionTypes.REQUEST_ADD_WALLET })
    wallet.userId = getState().auth.user._id
    const result = await walletsService.walletAdd(wallet)
    dispatch({ type: walletsActionTypes.REQUEST_ADD_WALLET_FINISHED, payload: result, error: result.error })
    return result
}

export const handleWalletUpdate = (wallet) => async(dispatch, getState) => {
    dispatch({ type: walletsActionTypes.REQUEST_UPDATE_WALLET })
    const result = await walletsService.walletUpdate(wallet)
    dispatch({ type: walletsActionTypes.REQUEST_UPDATE_WALLET_FINISHED, payload: result, error: result.error })
    return result
}

export const handleWalletDelete = (walletId) => async(dispatch, getState) => {
    dispatch({ type: walletsActionTypes.REQUEST_DELETE_WALLET })
    const result = await walletsService.walletDelete(walletId)
    dispatch({ type: walletsActionTypes.REQUEST_DELETE_WALLET_FINISHED, payload: result, error: result.error })
    return result
}

export const handleGetWallets = () => async(dispatch, getState) => {
    dispatch({ type: walletsActionTypes.REQUEST_GET_WALLETS })
    const result = await walletsService.getWallets()
    dispatch({ type: walletsActionTypes.REQUEST_GET_WALLETS_FINISHED, payload: result, error: result.error })
}
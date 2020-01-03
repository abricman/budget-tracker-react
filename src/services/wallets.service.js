import config from '../config'
import { ApiClient } from '../lib/HttpClient';
import { applyAuthorizationHeader } from '../lib/ConfTransforms';

const baseURL = `${config[process.env.NODE_ENV].API_URL}/wallets`
const confTransforms = [applyAuthorizationHeader]
const walletsClient = new ApiClient(baseURL, confTransforms)

export const getWallets = async () => {
    return new Promise((resolve, reject) => {
        walletsClient.get('/').then(res => {
            resolve(res.data)
        }).catch(res => {
            console.log(res)
            resolve({ error: true, errorMessage: res.response.data })
        })
    })
}

export const walletAdd = async (wallet) => {
    return new Promise((resolve, reject) => {
        walletsClient.post('/', wallet).then(res => {
            resolve(res.data)
        }).catch(res => {
            console.log(res)
            resolve({ error: true, errorMessage: res.response.data })
        })
    })
}

export const walletUpdate = async (wallet) => {
    return new Promise((resolve, reject) => {
        walletsClient.patch(`/${wallet._id}`, wallet).then(res => {
            resolve(res.data)
        }).catch(res => {
            console.log(res)
            resolve({ error: true, errorMessage: res.response.data })
        })
    })
}

export const walletDelete = async (walletId) => {
    return new Promise((resolve, reject) => {
        walletsClient.delete(`/${walletId}`).then(res => {
            resolve(res.data)
        }).catch(res => {
            console.log(res)
            resolve({ error: true, errorMessage: res.response.data })
        })
    })
}

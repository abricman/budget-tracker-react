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
    // TODO: Abstract the promise construct
}
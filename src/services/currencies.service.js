import config from '../config'
import { ApiClient } from '../lib/HttpClient';
import { applyAuthorizationHeader } from '../lib/ConfTransforms';

const baseURL = `${config[process.env.NODE_ENV].API_URL}/currencies`
const confTransforms = [applyAuthorizationHeader]
const currenciesClient = new ApiClient(baseURL, confTransforms)

export const getCurrencies = async () => {
    return new Promise((resolve, reject) => {
        currenciesClient.get('/').then(res => {
            resolve(res.data)
        }).catch(res => {
            console.log(res)
            resolve({ error: true, errorMessage: res.response.data })
        })
    })
}
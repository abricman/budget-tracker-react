import config from '../config'
import { ApiClient } from '../lib/HttpClient';
import { applyAuthorizationHeader } from '../lib/ConfTransforms';

const baseURL = `${config[process.env.NODE_ENV].API_URL}/transactions`
const confTransforms = [applyAuthorizationHeader]
const transactionsClient = new ApiClient(baseURL, confTransforms)

export const getTransactions = async ( year, month) => {
    return new Promise((resolve, reject) => {
        transactionsClient.get(`/year/${year}/month/${month}`).then(res => {
            resolve(res.data)
        }).catch(res => {
            console.log(res)
            resolve({ error: true, errorMessage: res.response.data })
        })
    })
    // TODO: Abstract the promise construct
}

export const transactionAdd = async (transaction) => {
    return new Promise((resolve, reject) => {
        transactionsClient.post('/', transaction).then(res => {
            resolve(res.data)
        }).catch(res => {
            console.log(res)
            resolve({ error: true, errorMessage: res.response.data })
        })
    })
    // TODO: Abstract the promise construct
}

export const transactionUpdate = transaction => transactionsClient.patch('/', transaction)
export const transactionDelete = transaction => transactionsClient.delete('/', transaction)
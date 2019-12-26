import config from '../config'
import { ApiClient } from '../lib/HttpClient';
import { applyAuthorizationHeader } from '../lib/ConfTransforms';

const baseURL = `${config[process.env.NODE_ENV].API_URL}/categories`
const confTransforms = [applyAuthorizationHeader]
const categoriesClient = new ApiClient(baseURL, confTransforms)

export const getCategories = async () => {
    return new Promise((resolve, reject) => {
        categoriesClient.get('/').then(res => {
            resolve(res.data)
        }).catch(res => {
            console.log(res)
            resolve({ error: true, errorMessage: res.response.data })
        })
    })
    // TODO: Abstract the promise construct
}
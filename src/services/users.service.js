import config from '../config'
import { ApiClient } from '../lib/HttpClient';
import { applyAuthorizationHeader } from '../lib/ConfTransforms';

const baseURL = `${config[process.env.NODE_ENV].API_URL}/users`
const confTransforms = [applyAuthorizationHeader]
const usersClient = new ApiClient(baseURL, confTransforms)

export const signUp = user => usersClient.post('/', user)
export const signIn = user => usersClient.post('/sign-in', user)
export const signOut = user => usersClient.post('/sign-out', user)
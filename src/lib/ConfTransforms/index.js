import _ from 'lodash'
import { store } from '../../index'

export const applyAuthorizationHeader = conf => {
    const { auth } = store.getState()
    return auth.token ? _.set({...conf}, 'headers.Authorization', `Bearer ${auth.token}`) : conf
}
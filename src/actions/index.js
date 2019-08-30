import budgetTrackerApi from '../apis/budgetTracker';
import history from '../history';
import {
    SIGN_UP,
    SIGN_IN,
    SIGN_OUT
} from './types';

export const userSignUp = user => async(dispatch, getState) => {
    const response = await budgetTrackerApi.post('/user', user);
    dispatch({
        type: SIGN_UP,
        payload: {
            isSignedIn: true,
            user: response.data.user
        }
    })
    history.push('/home')
}

export const userSignIn = user => async(dispatch, getState) => {
    const response = await budgetTrackerApi.post('/user/signin', user);
    
    dispatch({
        type: SIGN_IN,
        payload: {
            isSignedIn: true,
            user: response.data.user
        }
    })
    history.push('/home')
}

export const userSignOut = user => async(dispatch, getState) => {
    await budgetTrackerApi.post('/user/signout', user);
    
    dispatch({
        type: SIGN_OUT,
        payload: {
            isSignedIn: false,
            user: null
        }
    })
    history.push('/')
}
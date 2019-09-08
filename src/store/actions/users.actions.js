import { push } from 'connected-react-router'
import { userConstants } from '../../constants'
import { usersService } from '../../services'

export const userSignUp = (token, user) => {
    return {
        type: userConstants.SIGN_UP,
        payload: {
            token,
            user
        }
    }
}

export const handleUserSignUp = user => async(dispatch, getState) => {
    const { data } = await usersService.signUp(user)
    dispatch(userSignUp(data.token, data.user))
    dispatch(push('/home'))
}

export const userSignIn = (token, user) => {
    debugger
    return {
        type: userConstants.SIGN_IN,
        payload: {
            token,
            user
        }
    }
}

export const handleUserSignIn = user => async(dispatch, getState) => {
    const { data } = await usersService.signIn(user)
    dispatch(userSignIn(data.token, data.user))
    dispatch(push('/home'))
}

export const userSignOut = () => {
    return {
        type: userConstants.SIGN_OUT,
        payload: {
            token: null,
            user: null
        }
    }
}

export const handleUserSignOut = user => async(dispatch, getState) => {
    await usersService.signOut(user)
    dispatch(userSignOut())
    dispatch(push('/'))
}
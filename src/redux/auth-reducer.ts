import {AppThunk} from './redux-store';
import {authApi} from 'api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth/SET-USER-DATA'

const initialState: InitialStateType = {
    email: null,
    isAuth: false,
    login: null,
    id: null
}
export const authReducer = (state: InitialStateType = initialState, action: AuthActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default :
            return state
    }
}

//ac
const setUserDataAC = (email: string | null, id: number | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {email, isAuth, login, id}
    } as const
}

//thunk
export const setUserData = (): AppThunk => async (dispatch) => {
    const data = await authApi.me()

    if (data.resultCode === 0) {
        const {id, login, email} = data.data
        dispatch(setUserDataAC(email, id, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    const data = await authApi.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(setUserData())
    } else {
        const message = data.messages.length > 0
            ? data.messages[0]
            : 'Some error'
        // @ts-ignore
        dispatch(stopSubmit('contact', {_error: message}))
    }
}
export const logout = (): AppThunk => async (dispatch) => {
    const data = await authApi.logout()
    if (data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}

//types
export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}
type InitialStateType = AuthDataType & {
    isAuth: boolean
}
export type AuthActionTypes = ReturnType<typeof setUserDataAC>


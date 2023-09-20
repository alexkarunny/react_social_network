import {AppThunk} from './redux-store';
import {authApi} from 'api/api';

const SET_USER_DATA = 'SET-USER-DATA'

const initialState: InitialStateType = {
    email: null,
    isAuth: false,
    login: null,
    id: null
}
export const authReducer = (state: InitialStateType = initialState, action: AuthActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
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
export const setUserData = (): AppThunk => (dispatch) => {
    authApi.me()
        .then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                dispatch(setUserDataAC(email, id, login, true))
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch) => {
    authApi.login(email, password, rememberMe).then(data => {
        if(data.resultCode === 0) {
            dispatch(setUserData())
        }
    })
}
export const logout = ():AppThunk => (dispatch) => {
    authApi.logout().then(data => {
        if(data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    })
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


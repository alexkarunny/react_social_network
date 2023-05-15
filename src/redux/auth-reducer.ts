const SET_USER_DATA = 'SET-USER-DATA'

export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}

type InitialStateType = AuthDataType & {
    isAuth: boolean
}

export type AuthActionTypes = ReturnType<typeof setUserData>

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
                ...action.data,
                isAuth: true
            }
        default :
            return state
    }
}

export const setUserData = (data: AuthDataType) => {
    return {
        type: SET_USER_DATA,
        data
    } as const
}



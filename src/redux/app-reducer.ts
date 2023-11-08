import {AppThunk} from 'redux/redux-store';
import {setUserData} from 'redux/auth-reducer';

const initialState: StateType = {
    isInitialized: false
}

export const appReducer = (state: StateType = initialState, action: AppActionTypes) => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state

    }
}

//ac
const initializedApp = () => ({type: 'SET-INITIALIZED'} as const)

//thunk
export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(setUserData())

    Promise.all([promise]).then(() => {
        dispatch(initializedApp())
    })

}

//types
type StateType = {
    isInitialized: boolean
}

export type AppActionTypes = ReturnType<typeof initializedApp>
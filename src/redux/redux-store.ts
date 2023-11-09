import {applyMiddleware, combineReducers, compose, createStore, Store} from 'redux';
import {ProfileActionsTypes, profilePageReducer} from './profile-page-reducer';
import {DialogsActionsTypes, dialogsPageReducer} from './dialogs-page-reducer';
import {UsersActionsTypes, usersPageReducer} from './users-page-reducer';
import {AuthActionTypes, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {AppActionTypes, appReducer} from 'redux/app-reducer';

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store<RootStateType> = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
));

/*export const store: Store<RootStateType> = createStore(rootReducer, applyMiddleware(thunkMiddleware))*/

export type AllActionsType = UsersActionsTypes | DialogsActionsTypes | ProfileActionsTypes | AuthActionTypes | AppActionTypes

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, AllActionsType>

// @ts-ignore
window.store = store
import {combineReducers, createStore, Store} from 'redux';
import {profilePageReducer} from './profile-page-reducer';
import {dialogsPageReducer} from './dialogs-page-reducer';

let rootReducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
})

export type RootStateType = ReturnType<typeof rootReducers>

export const store: Store<RootStateType> = createStore(rootReducers)

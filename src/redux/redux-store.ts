import {combineReducers, createStore, Store} from 'redux';
import {profilePageReducer} from './profile-page-reducer';
import {dialogsPageReducer} from './dialogs-page-reducer';

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store: Store<RootStateType> = createStore(rootReducer)

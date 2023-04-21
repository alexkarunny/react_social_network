/*
import {AddNewPostTextAC, AddPostAC, profilePageReducer, ProfilePageType} from './profile-page-reducer';
import {AddMessageAC, AddNewMessageTextAC, dialogsPageReducer, DialogsPageType} from './dialogs-page-reducer';
import {v1} from 'uuid';

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    _rerender: () => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

type ActionsTypes =
    ReturnType<typeof AddNewMessageTextAC> |
    ReturnType<typeof AddMessageAC> |
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof AddNewPostTextAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            postsTexts: [
                {id: v1(), textPost: 'Today is a great day', likesCount: 1},
                {id: v1(), textPost: 'I\'ll achieve the target', likesCount: 2},
                {id: v1(), textPost: 'I got it', likesCount: 3},
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsNames: [
                {id: 1, dialogName: 'Ivan'},
                {id: 2, dialogName: 'Lera'},
                {id: 3, dialogName: 'Snupp'},
                {id: 4, dialogName: 'Baza'},
                {id: 5, dialogName: 'Andrew'},
            ],
            messagesTexts: [
                {messageText: 'Hi'},
                {messageText: 'How are You?'},
                {messageText: 'At the same time'},
            ],
            newMessageText: '',
        }
    },
    _rerender() {
    },

    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        this._rerender()
    }
}

*/

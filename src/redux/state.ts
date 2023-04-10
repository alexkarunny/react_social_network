const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT'
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

export type StateType = {
    profilePage: {
        postsTexts: postType[]
        newPostText: string
    }
    dialogsPage: {
        dialogsNames: dialogNameType[]
        messagesTexts: messageTextType[]
        newMessageText: string
    }
}
export type postType = {
    id: number
    textPost: string
    likesCount: number
}
export type dialogNameType = {
    id: number
    dialogName: string
}
export type messageTextType = {
    messageText: string
}

export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    _rerender: () => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export const AddPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const AddMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const AddNewPostTextAC = (newPostText: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}
export const AddNewMessageTextAC = (newMessageText: string) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const
}
export type ActionsTypes =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof AddNewPostTextAC> |
    ReturnType<typeof AddNewMessageTextAC> |
    ReturnType<typeof AddMessageAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            postsTexts: [
                {id: 1, textPost: 'Today is a great day', likesCount: 1},
                {id: 2, textPost: 'I\'ll achieve the target', likesCount: 2},
                {id: 3, textPost: 'I got it', likesCount: 3},
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
        if (action.type === ADD_POST) {
            const newPost: postType = {
                id: new Date().getTime(),
                textPost: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsTexts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender();
        } else if (action.type === ADD_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText
            this._rerender()
        } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._rerender()
        } else if (action.type === ADD_MESSAGE) {
            this._state.dialogsPage.messagesTexts.push({messageText : this._state.dialogsPage.newMessageText})
            this._state.dialogsPage.newMessageText = ''
            this._rerender()
        }
    }
}


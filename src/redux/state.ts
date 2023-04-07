export type StateType = {
    profilePage: {
        postsTexts: postType[]
        newPostText: string
    }
    dialogsPage: {
        dialogsNames: dialogNameType[]
        messagesTexts: messageTextType[]
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
        type: 'ADD-POST'
    } as const
}
export const AddNewPostTextAC = (newPostText: string) => {
    return {
        type: 'ADD-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
}
export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof AddNewPostTextAC>

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
            ]
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
        if (action.type === 'ADD-POST') {
            const newPost: postType = {
                id: new Date().getTime(),
                textPost: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsTexts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender();
        } else if (action.type === 'ADD-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._rerender()
        }
    }
}


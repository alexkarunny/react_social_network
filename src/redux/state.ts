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
    addPostCallback: () => void
    addNewPostTextCallback: (newPostText: string) => void
    subscribe: (observer: () => void) => void
    _rerender: () => void
    getState: () => StateType
}

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
    addPostCallback() {
        const newPost: postType = {
            id: new Date().getTime(),
            textPost: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsTexts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerender();
    },
    addNewPostTextCallback(newPostText) {
        this._state.profilePage.newPostText = newPostText
        this._rerender()
    },
    _rerender() {
    },
    subscribe(observer) {
        this._rerender = observer
    },
    getState() {
        return this._state
    }
}
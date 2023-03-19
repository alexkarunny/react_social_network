import {rerender} from '../rerender';

export type stateProps = {
    profilePage: {
        postsTexts: postType[]
    },
    dialogsPage: {
        dialogsNames: dialogNameType[],
        messagesTexts: messageTextType[]
    },
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

export let state: stateProps = {
    profilePage: {
        postsTexts: [
            {id: 1, textPost: 'Today is a great day', likesCount: 1},
            {id: 2, textPost: 'I\'ll achieve the target', likesCount: 2},
            {id: 3, textPost: 'I got it', likesCount: 3},
        ],
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
}

export const addPostCallback = (textPost: string) => {
    const newPost: postType = {
        id: new Date().getTime(),
        textPost: textPost,
        likesCount: 0
    }

    state.profilePage.postsTexts.push(newPost)

    rerender(state);
}
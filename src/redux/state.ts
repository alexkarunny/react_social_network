export type stateProps = {
    profilePage: {
        postsTexts: postTextType[]
    },
    dialogsPage: {
        dialogsNames: dialogNameType[],
        messagesTexts: messageTextType[]
    },
}

export type postTextType = {
    textPost: string
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
            {textPost: 'Today is a great day'},
            {textPost: 'I\'ll achieve the target'},
            {textPost: 'I got it'},
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
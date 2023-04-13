import {ActionsTypes} from './store';

const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

export type DialogsPageType = {
    dialogsNames: dialogNameType[]
    messagesTexts: messageTextType[]
    newMessageText: string
}
export type dialogNameType = {
    id: number
    dialogName: string
}
export type messageTextType = {
    messageText: string
}

export const AddMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}

export const AddNewMessageTextAC = (newMessageText: string) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    } as const
}

const InitialState = {
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

export const dialogsPageReducer = (state: DialogsPageType = InitialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messagesTexts.push({messageText: state.newMessageText})
            state.newMessageText = ''
            return state
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}
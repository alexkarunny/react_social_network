import {ActionsTypes, DialogsPageType} from './state';

const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT'

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

export const dialogsPageReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
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
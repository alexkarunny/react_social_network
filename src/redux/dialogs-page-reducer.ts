import {AppThunk} from 'redux/redux-store';

const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

export const dialogsPageReducer = (state: DialogsPageType = InitialState, action: DialogsActionsTypes): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesTexts: [...state.messagesTexts, {messageText: action.message}]
            }
        default:
            return state
    }
}

//ac
const AddMessageAC = (message: string) => {
    return {
        type: ADD_MESSAGE,
        message
    } as const
}

//thunk
export const addMessage = (message: string): AppThunk => (dispatch) => {
    dispatch(AddMessageAC(message))
}

//types
export type DialogsPageType = {
    dialogsNames: dialogNameType[]
    messagesTexts: messageTextType[]
}
export type dialogNameType = {
    id: number
    dialogName: string
}
export type messageTextType = {
    messageText: string
}

export type DialogsActionsTypes =
    ReturnType<typeof AddMessageAC>

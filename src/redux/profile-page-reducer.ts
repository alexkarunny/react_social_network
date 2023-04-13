import {ActionsTypes} from './store';

export const ADD_POST = 'ADD-POST'
export const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT'

export const AddPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export type ProfilePageType = {
    postsTexts: postType[]
    newPostText: string
}

export type postType = {
    id: number
    textPost: string
    likesCount: number
}

export const AddNewPostTextAC = (newPostText: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}

const InitialState: ProfilePageType = {
    postsTexts: [
        {id: 1, textPost: 'Today is a great day', likesCount: 1},
        {id: 2, textPost: 'I\'ll achieve the target', likesCount: 2},
        {id: 3, textPost: 'I got it', likesCount: 3},
    ],
    newPostText: '',
}

export const profilePageReducer = (state: ProfilePageType = InitialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST :
            const newPost: postType = {
                id: new Date().getTime(),
                textPost: state.newPostText,
                likesCount: 0
            }
            state.postsTexts.push(newPost)
            state.newPostText = ''
            return state
        case ADD_NEW_POST_TEXT:
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}

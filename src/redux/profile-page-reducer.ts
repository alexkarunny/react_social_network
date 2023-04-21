import {v1} from 'uuid';

const ADD_POST = 'ADD-POST'
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT'

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
    id: string
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
        {id: v1(), textPost: 'Today is a great day', likesCount: 1},
        {id: v1(), textPost: 'I\'ll achieve the target', likesCount: 2},
        {id: v1(), textPost: 'I got it', likesCount: 3},
    ],
    newPostText: '',
}

type ActionsTypes =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof AddNewPostTextAC>

export const profilePageReducer = (state: ProfilePageType = InitialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST :
            const newPost: postType = {
                id: v1(),
                textPost: state.newPostText,
                likesCount: 0
            }
            return {...state, postsTexts: [...state.postsTexts, newPost], newPostText: ''}
        case ADD_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText}
        default:
            return state
    }
}

import {ActionsTypes, postType, ProfilePageType} from './state';

export const ADD_POST = 'ADD-POST'
export const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT'

export const AddPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const AddNewPostTextAC = (newPostText: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}

export const profilePageReducer = (state: ProfilePageType, action: ActionsTypes) => {
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

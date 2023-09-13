import {v1} from 'uuid';
import {AppThunk} from 'redux/redux-store';
import {profileApi} from 'api/api';

const ADD_POST = 'ADD-POST'
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT'
const GET_PROFILE = 'GET-PROFILE'


export type ProfilePageType = {
    postsTexts: postType[]
    newPostText: string
    profile?: ProfileType
    status: string
}

export type postType = {
    id: string
    textPost: string
    likesCount: number
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

const InitialState: ProfilePageType = {
    postsTexts: [
        {id: v1(), textPost: 'Today is a great day', likesCount: 1},
        {id: v1(), textPost: 'I\'ll achieve the target', likesCount: 2},
        {id: v1(), textPost: 'I got it', likesCount: 3},
    ],
    newPostText: '',
    status: '',
}

export type ProfileActionsTypes =
    ReturnType<typeof addPost> |
    ReturnType<typeof addNewPostText> |
    ReturnType<typeof getProfile> |
    ReturnType<typeof getStatus>

export const profilePageReducer = (state: ProfilePageType = InitialState, action: ProfileActionsTypes) => {
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
        case GET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

//ac
export const addPost = () => {
    return {
        type: ADD_POST
    } as const
}
export const addNewPostText = (newPostText: string) => {
    return {
        type: ADD_NEW_POST_TEXT,
        newPostText: newPostText
    } as const
}
const getProfile = (profile: ProfileType) => {
    return {
        type: GET_PROFILE,
        profile
    } as const
}
const getStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}

//thunk
export const setProfile = ( userId: string): AppThunk => (dispatch) => {
    profileApi.getUserProfile(userId).then(res => {
        dispatch(getProfile(res))
    })
}
export const setUserStatus = (userId: string): AppThunk => (dispatch) => {
    profileApi.getUserStatus(userId).then(res => {
        if(res) {
            dispatch(getStatus(res))
        }
    } )
}
export const updateStatus = (status: string):AppThunk => (dispatch) => {
    profileApi.updateUserStatus(status).then(res => {
        if(res.resultCode === 0) {
            dispatch(getStatus(status))
        }
    })
}
export const clearStatus = ():AppThunk => (dispatch) => {
    dispatch(getStatus(''))
}


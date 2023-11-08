import {v1} from 'uuid';
import {AppThunk} from 'redux/redux-store';
import {profileApi} from 'api/api';

const ADD_POST = 'profile/ADD-POST'
const GET_PROFILE = 'profile/GET-PROFILE'
const SET_STATUS = 'profile/SET-STATUS'
const REMOVE_POST = 'profile/REMOVE-POST'

const InitialState: ProfilePageType = {
    postsTexts: [
        {id: v1(), textPost: 'Today is a great day', likesCount: 1},
        {id: v1(), textPost: 'I\'ll achieve the target', likesCount: 2},
        {id: v1(), textPost: 'I got it', likesCount: 3},
    ],
    status: '',
}

export type ProfileActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof getProfile> |
    ReturnType<typeof getStatus> |
    ReturnType<typeof removePost>


export const profilePageReducer = (state: ProfilePageType = InitialState, action: ProfileActionsTypes) => {
    switch (action.type) {
        case ADD_POST :
            const newPost: postType = {
                id: v1(),
                textPost: action.post,
                likesCount: 0
            }
            return {...state, postsTexts: [...state.postsTexts, newPost]}
        case GET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case REMOVE_POST:
            return {...state,
            postsTexts: state.postsTexts.filter(p => p.id !== action.id)
            }
        default:
            return state
    }
}

//ac
const addPostAC = (post: string) => {
    return {
        type: ADD_POST,
        post
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
        type: SET_STATUS,
        status
    } as const
}
const removePost = (id: string) => {
    return {
        type: REMOVE_POST,
        id
    }as const
}

//thunk
export const setProfile = (userId: string): AppThunk => async (dispatch) => {
    const response = await profileApi.getUserProfile(userId)
        if(response) dispatch(getProfile(response))
}
export const setUserStatus = (userId: string): AppThunk => async (dispatch) => {
    const response = await  profileApi.getUserStatus(userId)
        if (response) {
            dispatch(getStatus(response))
        }
}
export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    const response = await profileApi.updateUserStatus(status)
        if (response.resultCode === 0) {
            dispatch(getStatus(status))
        }
}
export const clearStatus = (): AppThunk => (dispatch) => {
    dispatch(getStatus(''))
}

export const addPost = (post: string): AppThunk => (dispatch) => {
    dispatch(addPostAC(post))
}

//types
export type ProfilePageType = {
    postsTexts: postType[]
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

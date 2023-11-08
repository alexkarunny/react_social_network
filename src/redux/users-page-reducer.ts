import avatar from '../src/images/avatar.png'
import {usersApi} from 'api/api';
import {AppThunk} from './redux-store';
import {Dispatch} from 'redux';
import {updateObjectInArray} from 'utils/helpers/object-helpers';

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const GET_USERS = 'users/GET-USERS'
const SET_TOTAL_USERS_NUMBER = 'users/SET-TOTAL-USERS-NUMBER'
const CHANGE_CURRENT_PAGE = 'users/CHANGE-CURRENT-PAGE'
const TOGGLE_LOADING_IMG = 'users/TOGGLE-LOADING-IMG'
const TOGGLE_FOLLOW_BUTTON = 'users/TOGGLE-FOLLOW-BUTTON'

export type UserType = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: {
        small: string
        large: string
    }
}

export type InitialStateType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalUsersNumber: number
    isLoading: boolean
    isFollowing: boolean
    disabledUsers: number[]
}

const initialState: InitialStateType = {
    users: [
        {id: 1, name: 'Pirlo', followed: false, status: 'Manager', photos: {small: avatar, large: avatar}},
        {id: 2, name: 'Lampard', followed: true, status: 'Manager', photos: {small: avatar, large: avatar}},
        {id: 3, name: 'Iniesta', followed: false, status: 'Player', photos: {small: avatar, large: avatar}},
    ],
    currentPage: 1,
    pageSize: 100,
    totalUsersNumber: 0,
    isLoading: false,
    isFollowing: false,
    disabledUsers: []
}

export type UsersActionsTypes =
    ReturnType<typeof followUserAC> |
    ReturnType<typeof unFollowUserAC> |
    ReturnType<typeof getUsersAC> |
    ReturnType<typeof setTotalUsersNumber> |
    ReturnType<typeof changeCurrentPageAC> |
    ReturnType<typeof toggleLoadingImg> |
    ReturnType<typeof toggleFollowButton>

export const usersPageReducer = (state: InitialStateType = initialState, action: UsersActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: updateObjectInArray(state.users, action.userId,  {followed: true})}
        case UNFOLLOW:
            return {...state, users: updateObjectInArray(state.users, action.userId,  {followed: false})}
        case GET_USERS:
            return {...state, users: [...action.users]}
        case SET_TOTAL_USERS_NUMBER:
            return {
                ...state,
                totalUsersNumber: action.totalUsersNumber
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_LOADING_IMG:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_FOLLOW_BUTTON:
            return {
                ...state,
                disabledUsers: action.isFollowing
                    ? [...state.disabledUsers, action.userId]
                    : state.disabledUsers.filter(u => u !== action.userId)
            }
        default:
            return state
    }
}

export const followUserAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unFollowUserAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const getUsersAC = (users: UserType[]) => {
    return {
        type: GET_USERS,
        users
    } as const
}

export const setTotalUsersNumber = (totalUsersNumber: number) => {
    return {
        type: SET_TOTAL_USERS_NUMBER,
        totalUsersNumber
    } as const
}

export const changeCurrentPageAC = (currentPage: number) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        currentPage
    } as const
}

export const toggleLoadingImg = (isLoading: boolean) => {
    return {
        type: TOGGLE_LOADING_IMG,
        isLoading
    } as const
}

export const toggleFollowButton = (isFollowing: boolean, userId: number) => {
    return {
        type: TOGGLE_FOLLOW_BUTTON,
        isFollowing,
        userId
    } as const
}

export const getUsers = (pageSize: number, currentPage: number): AppThunk => async (dispatch) => {
    dispatch(toggleLoadingImg(true))
    const data = await usersApi.getUsers(pageSize, currentPage)
    dispatch(getUsersAC(data.items))
    dispatch(setTotalUsersNumber(data.totalCount))
    dispatch(toggleLoadingImg(false))

}

export const changeCurrentPage = (page: number, pageSize: number): AppThunk => async (dispatch) => {
    dispatch(toggleLoadingImg(true))
    dispatch(changeCurrentPageAC(page))
    const data = await usersApi.getUsers(pageSize, page)
    dispatch(getUsersAC(data.items))
    dispatch(toggleLoadingImg(false))
}

const followUnfollowFlow = async (apiMethod: any, actionCreator: any, userId: number, dispatch: Dispatch ) => {
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowButton(false, userId))
}

export const followUser = (userId: number, isFollowed: boolean): AppThunk =>  (dispatch) => {
    dispatch(toggleFollowButton(true, userId))

    if (isFollowed) {
        followUnfollowFlow(usersApi.unFollowUser, unFollowUserAC, userId, dispatch).then()
    } else {
        followUnfollowFlow(usersApi.followUser, followUserAC, userId, dispatch).then()
    }
}







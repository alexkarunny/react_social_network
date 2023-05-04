import avatar from '../src/images/avatar.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET-USERS'
const SET_TOTAL_USERS_NUMBER = 'SET-TOTAL-USERS-NUMBER'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'
const TOGGLE_LOADING_IMG = 'TOGGLE-LOADING-IMG'

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
}

type ActionsTypes =
    ReturnType<typeof followUserAC> |
    ReturnType<typeof unFollowUserAC> |
    ReturnType<typeof getUsersAC> |
    ReturnType<typeof setTotalUserNumbersAC> |
    ReturnType<typeof changeCurrentPageAC> |
    ReturnType<typeof toggleLoadingImgAC>

export const usersPageReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
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
        case 'TOGGLE-LOADING-IMG':
            return {
                ...state,
                isLoading: action.isLoading
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

export const setTotalUserNumbersAC = (totalUsersNumber: number) => {
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

export const toggleLoadingImgAC = (isLoading: boolean) => {
    return {
        type: TOGGLE_LOADING_IMG,
        isLoading
    } as const
}



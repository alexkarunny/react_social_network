import avatar from '../src/images/avatar.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET-USERS'
const SET_TOTAL_USERS_NUMBER = 'SET-TOTAL-USERS-NUMBER'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'

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
}

const initialState: InitialStateType = {
    users: [
        {id: 1, name: 'Pirlo', followed: false, status: 'Manager', photos: {small: avatar, large: avatar}},
        {id: 2, name: 'Lampard', followed: true, status: 'Manager', photos: {small: avatar, large: avatar}},
        {id: 3, name: 'Iniesta', followed: false, status: 'Player', photos: {small: avatar, large: avatar}},
    ],
    currentPage: 4,
    pageSize: 100,
    totalUsersNumber: 0
}

type ActionsTypes =
    ReturnType<typeof FollowUserAC> |
    ReturnType<typeof UnFollowUserAC> |
    ReturnType<typeof GetUsersAC> |
    ReturnType<typeof setTotalUserNumbersAC> |
    ReturnType<typeof changeCurrentPageAC>

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
        default:
            return state
    }
}

export const FollowUserAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const UnFollowUserAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const GetUsersAC = (users: UserType[]) => {
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



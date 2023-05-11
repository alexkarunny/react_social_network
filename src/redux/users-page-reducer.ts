import avatar from '../src/images/avatar.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET-USERS'
const SET_TOTAL_USERS_NUMBER = 'SET-TOTAL-USERS-NUMBER'
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE'
const TOGGLE_LOADING_IMG = 'TOGGLE-LOADING-IMG'
const TOGGLE_FOLLOW_BUTTON = 'TOGGLE-FOLLOW-BUTTON'

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

type ActionsTypes =
    ReturnType<typeof followUser> |
    ReturnType<typeof unFollowUser> |
    ReturnType<typeof getUsers> |
    ReturnType<typeof setTotalUsersNumber> |
    ReturnType<typeof changeCurrentPage> |
    ReturnType<typeof toggleLoadingImg> |
    ReturnType<typeof toggleFollowButton>

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
        case 'TOGGLE-FOLLOW-BUTTON':

            return {
                ...state,
                isFollowing: action.isFollowing,
                disabledUsers: action.isFollowing
                    ? [...state.disabledUsers, action.userId]
                    : state.disabledUsers.filter(u => u !== action.userId)
            }
        default:
            return state
    }
}

export const followUser = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const unFollowUser = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}

export const getUsers = (users: UserType[]) => {
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

export const changeCurrentPage = (currentPage: number) => {
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



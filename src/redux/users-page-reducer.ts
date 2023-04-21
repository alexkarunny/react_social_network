import {v1} from 'uuid';
import avatar from '../src/images/avatar.png'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET-USERS'

type LocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    isFollowed: boolean
    fullName: string
    status: string
    photoUrl: string
    location: LocationType
}

export type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: [
        {id: v1(), photoUrl:avatar, fullName: 'Pirlo', isFollowed: false, status: 'Manager', location: {city: 'Flero', country: 'Italy'}},
        {id: v1(), photoUrl:avatar, fullName: 'Lampard', isFollowed: true, status: 'Manager', location: {city: 'Romford', country: 'GB'}},
        {id: v1(), photoUrl:avatar, fullName: 'Iniesta', isFollowed: false, status: 'Player', location: {city: 'Albasete', country: 'Spain'}},
    ]
}

type ActionsTypes =
    ReturnType<typeof FollowUserAC> |
    ReturnType<typeof UnFollowUserAC> |
    ReturnType<typeof GetUsersAC>

export const usersPageReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, isFollowed: true} : u) }
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, isFollowed: false} : u)}
        case GET_USERS:
            return {...state, users: [...action.users]}
        default:
            return state
    }
}

export const FollowUserAC = (userId: string) => {
    return {
        type: FOLLOW,
        userId
    } as const
}

export const UnFollowUserAC = (userId: string) => {
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



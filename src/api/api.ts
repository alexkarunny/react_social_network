import axios from 'axios';
import {UserType} from '../redux/users-page-reducer';
import {AuthDataType} from '../redux/auth-reducer';


type GetResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

type FollowResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

export type AuthResponseType<T> = {
    resultCode: number
    messages: []
    data: T
}

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        'API-KEY': '88c27098-d58c-439b-a5fb-d6a202fce25b'
    }
})

export const usersApi = {
    getUsers(pageSize: number, currentPage: number) {
        return instance.get<GetResponseType>(`users?count=${pageSize}&page=${currentPage}`).then(res => res.data)
    },
    followUser(userId: number) {
        return instance.post<FollowResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unFollowUser(userId: number) {
        return instance.delete<FollowResponseType>(`follow/${userId}`).then(res => res.data)
    },
}

export const authApi = {
    me() {
        return instance.get<AuthResponseType<AuthDataType>>(`/auth/me`).then(res => res.data)
    },
}
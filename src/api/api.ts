import axios from 'axios';
import {UserType} from 'redux/users-page-reducer';
import {AuthDataType} from 'redux/auth-reducer';
import {PhotosType, ProfileType} from 'redux/profile-page-reducer';


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

export type AuthResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    withCredentials: true,
    headers: {
        'API-KEY': 'c46cfa49-c5da-44fb-bd1b-cd21454c410a'
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
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<AuthResponseType<{userId: number}>>(`/auth/login`, {email, password, rememberMe}).then(res => res.data)
    },
    logout() {
        return instance.delete<AuthResponseType>(`/auth/login`).then(res => res.data)
    }

}

export const profileApi = {
    getUserProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
    },
    getUserStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`).then(res => res.data)
    },
    updateUserStatus(status: string) {
        return instance.put<FollowResponseType>(`profile/status`, {status}).then(res => res.data)
    },
    setUserPhoto(image: File) {
        const formData = new FormData()
        formData.append('image', image)
        return instance.put<AuthResponseType<{photos: PhotosType}>>(`profile/photo`, formData, {headers : {
            'Content-Type': 'multipart/form-data'
            }}).then(res => res.data)
    }
}
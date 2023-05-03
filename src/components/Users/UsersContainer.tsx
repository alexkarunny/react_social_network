import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from '../../redux/redux-store';
import {
    changeCurrentPageAC,
    FollowUserAC,
    GetUsersAC,
    setTotalUserNumbersAC,
    UnFollowUserAC,
    UserType
} from '../../redux/users-page-reducer';
import {Dispatch} from 'redux';

type OwnPropsType = {
    title: string
}

type MapStatePropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalUsersNumber: number
}

type MapDispatchPropsType = {
    followUserHandler: (userId: number) => void
    unFollowUserHandler: (userId: number) => void
    getUsers: (users: UserType[]) => void
    setTotalUsersNumber: (totalUsersNumber: number) => void
    changeCurrentPage: (currentPage: number) => void
}

export const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersNumber: state.usersPage.totalUsersNumber,
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followUserHandler: (userId) => {
            dispatch(FollowUserAC(userId))
        },
        unFollowUserHandler: (userId) => {
            dispatch(UnFollowUserAC(userId))
        },
        getUsers: (users) => {
            dispatch(GetUsersAC(users))
        },
        setTotalUsersNumber: (totalUsersNumber) => {
            dispatch(setTotalUserNumbersAC(totalUsersNumber))
        },
        changeCurrentPage: (currentPage) => {
            dispatch(changeCurrentPageAC(currentPage))
        }
    }
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
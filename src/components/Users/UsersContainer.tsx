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
import React from 'react';
import axios from 'axios';

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
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    getUsers: (users: UserType[]) => void
    setTotalUsersNumber: (totalUsersNumber: number) => void
    changeCurrentPage: (currentPage: number) => void
}

type responseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export class UsersAPI extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.getUsers(response.data.items)
                this.props.setTotalUsersNumber(response.data.totalCount)
            })
    }

    changeCurrentPageHandler = (p: number) => {
        this.props.changeCurrentPage(p)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.getUsers(response.data.items)
            })
    }

    render() {
      return  <Users users={this.props.users}
                     totalUsersNumber={this.props.totalUsersNumber}
                     title={this.props.title}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     changeCurrentPageCallback={this.changeCurrentPageHandler}
                     followUserCallback={this.props.followUserCallback}
                     unFollowUserCallback={this.props.unFollowUserCallback}
      />
    }
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
        followUserCallback: (userId) => {
            dispatch(FollowUserAC(userId))
        },
        unFollowUserCallback: (userId) => {
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

export type UsersAPIPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
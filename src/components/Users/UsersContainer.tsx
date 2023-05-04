import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from '../../redux/redux-store';
import {
    changeCurrentPageAC,
    followUserAC,
    getUsersAC,
    setTotalUserNumbersAC, toggleLoadingImgAC,
    unFollowUserAC,
    UserType
} from '../../redux/users-page-reducer';
import {Dispatch} from 'redux';
import React from 'react';
import axios from 'axios';
import {Preloader} from '../Common/Preloader/Preloader';

type OwnPropsType = {
    title: string
}


type MapStatePropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalUsersNumber: number
    isLoading: boolean
}

type MapDispatchPropsType = {
    followUserCallback: (userId: number) => void
    unFollowUserCallback: (userId: number) => void
    getUsers: (users: UserType[]) => void
    setTotalUsersNumber: (totalUsersNumber: number) => void
    changeCurrentPage: (currentPage: number) => void
    toggleLoadingImg: (isLoading: boolean) => void
}

type responseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export class UsersAPI extends React.Component<UsersAPIPropsType> {

    componentDidMount() {
        this.props.toggleLoadingImg(true)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.getUsers(response.data.items)
                this.props.setTotalUsersNumber(response.data.totalCount)
                this.props.toggleLoadingImg(false)
            })
    }

    changeCurrentPageHandler = (p: number) => {
        this.props.toggleLoadingImg(true)
        this.props.changeCurrentPage(p)
        axios.get<responseType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then(response => {
                this.props.getUsers(response.data.items)
                this.props.toggleLoadingImg(false)
            })
    }

    render() {
      return <div>
          {this.props.isLoading && <Preloader />}
          <Users users={this.props.users}
                     totalUsersNumber={this.props.totalUsersNumber}
                     title={this.props.title}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
                     changeCurrentPageCallback={this.changeCurrentPageHandler}
                     followUserCallback={this.props.followUserCallback}
                     unFollowUserCallback={this.props.unFollowUserCallback}
      />
      </div>
    }
}


export const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersNumber: state.usersPage.totalUsersNumber,
        isLoading: state.usersPage.isLoading,
    }
}

export const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followUserCallback: (userId) => {
            dispatch(followUserAC(userId))
        },
        unFollowUserCallback: (userId) => {
            dispatch(unFollowUserAC(userId))
        },
        getUsers: (users) => {
            dispatch(getUsersAC(users))
        },
        setTotalUsersNumber: (totalUsersNumber) => {
            dispatch(setTotalUserNumbersAC(totalUsersNumber))
        },
        changeCurrentPage: (currentPage) => {
            dispatch(changeCurrentPageAC(currentPage))
        },
        toggleLoadingImg: (isLoading) => {
            dispatch(toggleLoadingImgAC(isLoading))
        }
    }
}

export type UsersAPIPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
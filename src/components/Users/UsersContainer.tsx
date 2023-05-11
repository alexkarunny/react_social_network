import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from '../../redux/redux-store';
import {
    changeCurrentPage,
    followUser,
    getUsers,
    setTotalUsersNumber,
    toggleLoadingImg,
    unFollowUser,
    UserType
} from '../../redux/users-page-reducer';
import React from 'react';
import {Preloader} from '../Common/Preloader/Preloader';
import {usersApi} from '../../api/api';

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
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    getUsers: (users: UserType[]) => void
    setTotalUsersNumber: (totalUsersNumber: number) => void
    changeCurrentPage: (currentPage: number) => void
    toggleLoadingImg: (isLoading: boolean) => void
}



type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType  & OwnPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleLoadingImg(true)
        usersApi.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
                this.props.getUsers(data.items)
                this.props.setTotalUsersNumber(data.totalCount)
                this.props.toggleLoadingImg(false)
            })
    }

    changeCurrentPageHandler = (p: number) => {
        this.props.toggleLoadingImg(true)
        this.props.changeCurrentPage(p)
        usersApi.getUsers(this.props.pageSize, p)
            .then(data => {
                this.props.getUsers(data.items)
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
                     followUserCallback={this.props.followUser}
                     unFollowUserCallback={this.props.unFollowUser}
      />
      </div>
    }
}

export const mapStateToProps = (state: RootStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersNumber: state.usersPage.totalUsersNumber,
        isLoading: state.usersPage.isLoading
    }
}



export default connect(mapStateToProps, {followUser,
        unFollowUser,
    getUsers,
    setTotalUsersNumber,
    changeCurrentPage,
    toggleLoadingImg})(UsersContainer)
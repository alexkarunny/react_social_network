import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from 'redux/redux-store';
import {changeCurrentPage, followUser, getUsers, UserType} from 'redux/users-page-reducer';
import React from 'react';
import {Preloader} from '../Common/Preloader/Preloader';
import {
    currentPageSelector, disabledUsersSelector,
    isLoadingSelector,
    pageSizeSelector,
    totalUsersSelector,
    usersSelector
} from 'redux/user-selectors';

type OwnPropsType = {
    title: string
}

type MapStatePropsType = {
    users: UserType[]
    currentPage: number
    pageSize: number
    totalUsersNumber: number
    isLoading: boolean
    disabledUsers: number[]
}

type MapDispatchPropsType = {
    followUser: (userId: number, isFollowed: boolean) => void
    changeCurrentPage: (page: number, pageSize: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
}

type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    changeCurrenPageCallback = (page: number) => {
        this.props.changeCurrentPage(page, this.props.pageSize)
    }

    render() {
        return <div>
            {this.props.isLoading && <Preloader/>}
            <Users users={this.props.users}
                   totalUsersNumber={this.props.totalUsersNumber}
                   title={this.props.title}
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   changeCurrentPageCallback={this.changeCurrenPageCallback}
                   followUserCallback={this.props.followUser}
                   disabledUsers={this.props.disabledUsers}
            />
        </div>
    }
}

/*export const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersNumber: state.usersPage.totalUsersNumber,
        isLoading: state.usersPage.isLoading,
        disabledUsers: state.usersPage.disabledUsers
    }
}*/
export const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: usersSelector(state),
        currentPage: currentPageSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersNumber: totalUsersSelector(state),
        isLoading: isLoadingSelector(state),
        disabledUsers: disabledUsersSelector(state)
    }
}

export default connect(mapStateToProps, {
    followUser,
    changeCurrentPage,
    getUsers
})(UsersContainer)
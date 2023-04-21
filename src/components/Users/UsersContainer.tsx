import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStateType} from '../../redux/redux-store';
import {FollowUserAC, GetUsersAC, UnFollowUserAC, UserType} from '../../redux/users-page-reducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    users: UserType[]
}

type MapDispatchPropsType = {
    followUserHandler: (userId: string) => void,
    unFollowUserHandler: (userId: string) => void,
    getUsers: (users: UserType[]) => void
}

export const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
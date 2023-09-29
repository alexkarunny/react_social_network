import {RootStateType} from 'redux/redux-store';
import {createSelector} from 'reselect';
import {UserType} from 'redux/users-page-reducer';

const getUsersSelector = (state: RootStateType) => state.usersPage.users
export const usersSelector = createSelector(getUsersSelector, (users: UserType[]):UserType[] => {
    return users.map(u => u)
})
export const currentPageSelector = (state: RootStateType) => state.usersPage.currentPage
export const pageSizeSelector = (state: RootStateType) => state.usersPage.pageSize
export const totalUsersSelector = (state: RootStateType) => state.usersPage.totalUsersNumber
export const isLoadingSelector = (state: RootStateType) => state.usersPage.isLoading
export const disabledUsersSelector = (state: RootStateType) => state.usersPage.disabledUsers

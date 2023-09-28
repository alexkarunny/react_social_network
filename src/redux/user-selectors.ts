import {RootStateType} from 'redux/redux-store';

export const usersSelector = (state: RootStateType) => state.usersPage.users
export const currentPageSelector = (state: RootStateType) => state.usersPage.currentPage
export const pageSizeSelector = (state: RootStateType) => state.usersPage.pageSize
export const totalUsersSelector = (state: RootStateType) => state.usersPage.totalUsersNumber
export const isLoadingSelector = (state: RootStateType) => state.usersPage.isLoading
export const disabledUsersSelector = (state: RootStateType) => state.usersPage.disabledUsers

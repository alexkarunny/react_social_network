import React from 'react';
import {UserType} from 'redux/users-page-reducer';
import {Paginator} from 'components/Common/paginator/paginator';
import {User} from 'components/Users/user/user';

type PropsType = {
    users: UserType[]
    totalUsersNumber: number
    pageSize: number
    title: string
    currentPage: number
    disabledUsers: number[]
    changeCurrentPageCallback: (page: number) => void
    followUserCallback: (userId: number, isFollowed: boolean) => void
}

export const Users: React.FC<PropsType> = ({
                                               users,
                                               disabledUsers,
                                               followUserCallback,
                                               changeCurrentPageCallback,
                                               currentPage,
                                               pageSize,
                                               totalUsersNumber,
                                               title
                                           }) => {


    return (
        <div>
            <h1>{title}</h1>
            <Paginator changeCurrentPageCallback={changeCurrentPageCallback} pageSize={pageSize}
                       currentPage={currentPage} totalItemsNumber={totalUsersNumber} portionSize={10}/>
            {
                users.map(u => <User key={u.id} disabledUsers={disabledUsers} user={u} followUserCallback={followUserCallback} />)
            }
        </div>
    )
};








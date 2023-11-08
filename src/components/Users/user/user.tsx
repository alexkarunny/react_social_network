import React from 'react';
import s from './user.module.css';
import avatar from 'src/images/avatar.png';
import {UserType} from 'redux/users-page-reducer';
import {NavLink} from 'react-router-dom';

type PropsType = {
    user: UserType
    disabledUsers: number[]
    followUserCallback: (userId: number, isFollowed: boolean) => void
}

export const User: React.FC<PropsType> = ({
                                               user,
                                               disabledUsers,
                                               followUserCallback,

                                           }) => {
    const buttonName = user.followed ? 'unfollow' : 'follow'
    const spanTitle = user.followed ? ' followed' : ' unfollowed'

    const onClickHandler = () => {
        if (user.followed) {
            followUserCallback(user.id, user.followed)
        } else {
            followUserCallback(user.id, user.followed)
        }
    }

    return (
        <div key={user.id} className={s.userWrapper}>
            <NavLink to={`/profile/${user.id}`}><img src={user.photos.small ? user.photos.small : avatar}
                                                  alt=""
                                                  className={s.avatar}
            />
            </NavLink>
            <span>{user.name}</span>
            <span>{user.status}</span>
            <span>{spanTitle}</span>
            <button disabled={disabledUsers.some(n => n === user.id)}
                    onClick={onClickHandler}>{buttonName}</button>
        </div>
    )
};







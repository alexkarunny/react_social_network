import React from 'react';
import s from './users.module.css';
import avatar from '../../src/images/avatar.png';
import {UserType} from '../../redux/users-page-reducer';
import {NavLink} from 'react-router-dom';

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

export const Users = (props: PropsType) => {
    const pagesAmount = Math.ceil(props.totalUsersNumber / props.pageSize)

    const pages = []

    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <h1>{props.title}</h1>
            {
                pages.map((p, index) => {

                    const finalPageClassName = `
                        ${s.pageNumber}
                        ${p === props.currentPage ? s.activePageNumber : ' '}
                        `
                    const changeCurrentPageHandler = () => {
                        props.changeCurrentPageCallback(p)
                    }

                    return <span key={index} className={finalPageClassName}
                                 onClick={changeCurrentPageHandler}>{p}</span>
                })
            }
            {
                props.users.map(u => {
                    const buttonName = u.followed ? 'unfollow' : 'follow'
                    const spanTitle = u.followed ? ' followed' : ' unfollowed'

                    const onClickHandler = () => {
                        if (u.followed) {
                            props.followUserCallback(u.id, u.followed)
                        } else {
                            props.followUserCallback(u.id, u.followed)
                        }
                    }

                    return <div key={u.id} className={s.userWrapper}>
                        <NavLink to={`/profile/${u.id}`}><img src={u.photos.small ? u.photos.small : avatar}
                                                              alt=""
                                                              className={s.avatar}
                        />
                        </NavLink>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                        <span>{spanTitle}</span>
                        <button disabled={props.disabledUsers.some(n => n === u.id)}
                                onClick={onClickHandler}>{buttonName}</button>
                    </div>
                })
            }
        </div>
    )
};








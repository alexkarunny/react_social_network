import React from 'react';
import s from './users.module.css';
import avatar from '../../src/images/avatar.png';
import {UserType} from '../../redux/users-page-reducer';
import {NavLink} from 'react-router-dom';
import {usersApi} from '../../api/api';

type PropsType = {
    users: UserType[]
    totalUsersNumber: number
    pageSize: number
    title: string
    currentPage: number
    changeCurrentPageCallback: (p: number) => void
    unFollowUserCallback: (id: number) => void
    followUserCallback: (id: number) => void
}

export const Users = (props: PropsType) => {
    const pagesAmount = Math.ceil(props.totalUsersNumber / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }
    const changeCurrentPageHandler = (p: number) => {
        props.changeCurrentPageCallback(p)
    }

    const unFollowUserHandler = (id: number) => {
        props.unFollowUserCallback(id)
    }
    const followUserHandler = (id: number) => {
        props.followUserCallback(id)
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
                    return <span key={index} className={finalPageClassName}
                                 onClick={() => changeCurrentPageHandler(p)}>{p}</span>
                })
            }
            {
                props.users.map(u => {
                    const buttonName = u.followed ? 'unfollow' : 'follow'
                    const spanTitle = u.followed ? ' followed' : ' unfollowed'
                    const onClickHandler = () => {
                        if (u.followed) {

                            usersApi.unFollowUser(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    unFollowUserHandler(u.id)
                                }
                            })

                        } else {
                            usersApi.followUser(u.id).then(data => {
                                if (data.resultCode === 0) {
                                    followUserHandler(u.id)
                                }
                            })

                        }
                    }

                    return <div key={u.id} className={s.userWrapper}>
                        <NavLink to={`/profile/${u.id}`}><img src={u.photos.small ? u.photos.small : avatar} alt=""
                                                              className={s.avatar}/></NavLink>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                        <span>{spanTitle}</span>
                        <button onClick={onClickHandler}>{buttonName}</button>

                    </div>
                })
            }
        </div>
    )
};








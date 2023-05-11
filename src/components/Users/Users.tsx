import React from 'react';
import s from './users.module.css';
import avatar from '../../src/images/avatar.png';
import {UserType} from '../../redux/users-page-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type PropsType = {
    users: UserType[]
    totalUsersNumber: number
    pageSize: number
    title: string
    currentPage: number
    changeCurrentPageCallback:  (p: number) => void
    unFollowUserCallback: (id: number) => void
    followUserCallback: (id: number) => void
}

type FollowResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

export const Users = (props: PropsType) => {
    const pagesAmount = Math.ceil(props.totalUsersNumber / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i)
    }
    const  changeCurrentPageHandler = (p: number) => {
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
                } )
            }
            {
                props.users.map(u => {
                    const buttonName = u.followed ? 'unfollow' : 'follow'
                    const spanTitle = u.followed ? ' followed' : ' unfollowed'
                    const onClickHandler = () => {
                        if (u.followed) {

                            axios.delete<FollowResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true
                            }).then(res => {
                                if(res.data.resultCode === 0 ) {
                                    unFollowUserHandler(u.id)
                                }
                            })

                        } else {
                            axios.post<FollowResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '88c27098-d58c-439b-a5fb-d6a202fce25b'
                                }
                            }).then(res => {
                                if(res.data.resultCode === 0) {
                                    followUserHandler(u.id)
                                }
                            })

                        }
                    }

                    return <div key={u.id} className={s.userWrapper}>
                        <NavLink to={`/profile/${u.id}`} ><img src={u.photos.small ? u.photos.small : avatar} alt=""
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








import {UsersPropsType} from './UsersContainer';
import {UserType} from '../../redux/users-page-reducer';
import s from './users.module.css'
import axios from 'axios';
import avatar from '../../src/images/avatar.png'
import React from 'react';

type responseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.getUsers(response.data.items))
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {
                    this.props.users.map(u => {
                        const buttonName = u.followed ? 'unfollow' : 'follow'
                        const spanTitle = u.followed ? ' followed' : ' unfollowed'
                        const onClickHandler = () => {
                            if (u.followed) {
                                this.props.unFollowUserHandler(u.id)
                            } else {
                                this.props.followUserHandler(u.id)
                            }
                        }

                        return <div key={u.id} className={s.userWrapper}>
                            <img src={u.photos.small ? u.photos.small : avatar} alt="" className={s.avatar}/>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                            <span>{spanTitle}</span>
                            <button onClick={onClickHandler}>{buttonName}</button>

                        </div>
                    })
                }
            </div>
        )
    }
}


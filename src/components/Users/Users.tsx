import {UsersPropsType} from './UsersContainer';
import {UserType} from '../../redux/users-page-reducer';
import s from './users.module.css'
import axios from 'axios';
import avatar from '../../src/images/avatar.png'


type PropsType = UsersPropsType

type responseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const Users = (props: PropsType) => {

    if(props.users.length === 0 ) {
        axios.get<responseType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.getUsers(response.data.items))
    }

    const users = props.users

    return (
        <div>
            <h1>Users</h1>
            {
                users.map(u => {
                        const onClickFollowHandler = () => {
                            props.followUserHandler(u.id)
                        }
                        const onClickUnFollowHandler = () => {
                            props.unFollowUserHandler(u.id)
                        }
                    return <div key={u.id} className={s.userWrapper}>
                        <img src={u.photos.small ? u.photos.small : avatar } alt="" className={s.avatar}/>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                        <span>{u.followed ? ' followed' : ' unfollowed'}</span>
                        <button onClick={onClickFollowHandler}>follow</button>
                        <button onClick={onClickUnFollowHandler}>unfollow</button>
                    </div>
                })
            }
        </div>
    )
}
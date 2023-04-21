import {UsersPropsType} from './UsersContainer';
import {v1} from 'uuid';
import {UserType} from '../../redux/users-page-reducer';
import s from './users.module.css'

type PropsType = UsersPropsType

const newUsers: UserType[] = [
    {id: v1(), photoUrl:'', fullName: 'Shevchenko', isFollowed: false, status: 'Manager', location: {city: 'Flero', country: 'Italy'}},
    {id: v1(), photoUrl:'', fullName: 'Arveladze', isFollowed: false, status: 'Manager', location: {city: 'Romford', country: 'GB'}},
    {id: v1(), photoUrl:'', fullName: 'Dragun', isFollowed: false, status: 'Player', location: {city: 'Albasete', country: 'Spain'}},
]

export const Users = (props: PropsType) => {

    if(props.users.length === 0 ) props.getUsers(newUsers)
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
                        <img src={u.photoUrl} alt="" className={s.avatar}/>
                        <span>{u.fullName}</span>
                        <span>{u.status}</span>
                        <span>{u.isFollowed ? ' followed' : ' unfollowed'}</span>
                        <button onClick={onClickFollowHandler}>follow</button>
                        <button onClick={onClickUnFollowHandler}>unfollow</button>
                    </div>
                })
            }
        </div>
    )
}
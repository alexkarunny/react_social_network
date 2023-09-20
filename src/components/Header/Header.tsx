import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    email: string | null
    login: string | null
    isAuth: boolean
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    const {email, login, isAuth, logout} = props
    const onClickLogoutHandler = () => {
        logout()
    }
    return (
        <div className={classes.header}>
            {
                isAuth
                    ? <div className={classes.userDataBlock}>
                        <span>{login}</span>
                        <span>{email}</span>
                    <button onClick={onClickLogoutHandler}>log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
            }

        </div>
    )
}
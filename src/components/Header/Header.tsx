import React from 'react';
import classes from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    email: string | null
    login: string | null
    isAuth: boolean
}

export const Header = (props: HeaderPropsType) => {
    const {email, login, isAuth} = props
    return (
        <div className={classes.header}>

            {
                isAuth
                    ?<div className={classes.userDataBlock}>
                        <span>{login}</span>
                        <span>{email}</span>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
            }

        </div>
    )
}
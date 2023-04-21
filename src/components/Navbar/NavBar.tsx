import React from 'react';
import classes from './NavBar.module.css'
import {NavLink} from 'react-router-dom';

type TechnologiesPropType = {
    title: string
}
export const NavBar = (props: TechnologiesPropType) => {
    return (
        <div className={classes.nav}>
            <h2>{props.title}</h2>
            <div>
                <div className={classes.item}><NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink></div>
                <div className={classes.item}><NavLink to={'/friends'} activeClassName={classes.active}>Friends</NavLink></div>
                <div className={classes.item}><NavLink to={'/users'} activeClassName={classes.active}>Users</NavLink></div>
                <div className={classes.item}><NavLink to={'/dialogs'} activeClassName={classes.active}>Dialogs</NavLink></div>
                <div className={classes.item}><NavLink to={'/video'} activeClassName={classes.active}>Video</NavLink></div>
                <div className={classes.item}><NavLink to={'/settings'} activeClassName={classes.active}>Settings</NavLink></div>
            </div>
        </div>
    )
}
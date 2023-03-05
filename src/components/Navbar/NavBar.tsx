import React from 'react';
import classes from './NavBar.module.css'

type TechnologiesPropType = {
    title: string
}
export const NavBar = (props: TechnologiesPropType) => {
    return (
        <div className={classes.nav}>
            <h2>{props.title}</h2>
            <div>
                <div><a href={''}>Profile</a></div>
                <div><a href={''}>Friends</a></div>
                <div><a href={''}>Messages</a></div>
                <div><a href={''}>Video</a></div>
                <div><a href={''}>Settings</a></div>
            </div>
        </div>
    )
}
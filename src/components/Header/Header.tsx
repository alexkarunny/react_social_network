import React from 'react';
import classes from './Header.module.css'

type HeaderPropsType = {
    title: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <div className={classes.header}>
            <h2>{props.title}</h2>
        </div>
    )
}
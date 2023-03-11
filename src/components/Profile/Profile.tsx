import React from 'react';
import classes from './Profile.module.css';
import bg from '../../src/images/bg.jpg'
import {MyPosts} from './MyPosts/MyPosts';

type FooterPropsType = {
    title: string
}

export const Profile = (props: FooterPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <div>
                <img src={bg} alt="fg" className={classes.bg}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts title={'My Posts'}/>
        </div>
    )
}
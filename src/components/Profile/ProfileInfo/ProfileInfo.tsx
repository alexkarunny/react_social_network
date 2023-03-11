import classes from './ProfileInfo.module.css'
import bg from '../../../src/images/bg.jpg';
import React from 'react';

type ProfileInfoPropsType = {}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src={bg} alt="fg" className={classes.bg}/>
            </div>
            <div>
                ava + description
            </div>
        </div>
    )
}


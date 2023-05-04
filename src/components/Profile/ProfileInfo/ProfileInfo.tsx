import classes from './ProfileInfo.module.css'
import bg from '../../../src/images/bg.jpg';
import React from 'react';
import {ProfileType} from '../../../redux/profile-page-reducer';

type ProfileInfoPropsType = {
    profile?: ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>

            </div>
            <div>
                {props.profile?.photos.small
                    ? <img src={props.profile?.photos.small} alt=""/>
                    :<img src={bg} alt="fg" className={classes.bg}/>
                }
                <p>{props.profile?.fullName}</p>
                <p>{props.profile?.aboutMe}</p>
                <p>{props.profile?.contacts.instagram}</p>
            </div>
        </div>
    )
}

  
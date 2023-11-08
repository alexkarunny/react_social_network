import classes from './ProfileInfo.module.css'
import bg from '../../../src/images/bg.jpg';
import React from 'react';
import {ProfileType} from 'redux/profile-page-reducer';

type PropsType = {
    profile?: ProfileType
}

export const ProfileInfo: React.FC<PropsType> = ({profile}) => {
    return (
        <div>
            <div>

            </div>
            <div>
                {profile?.photos.small
                    ? <img src={profile?.photos.small} alt=""/>
                    :<img src={bg} alt="fg" className={classes.bg}/>
                }
                <p>{profile?.fullName}</p>
                <p>{profile?.aboutMe}</p>
                <p>{profile?.contacts.instagram}</p>
            </div>
        </div>
    )
}

  
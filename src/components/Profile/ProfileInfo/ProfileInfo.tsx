import classes from './ProfileInfo.module.css'
import altAvatar from '../../../src/images/avatar.png';
import React, {ChangeEvent} from 'react';
import {ProfileType} from 'redux/profile-page-reducer';

type PropsType = {
    profile?: ProfileType
    isOwner: boolean
    saveAvatar: (image: File) => void
}

export const ProfileInfo: React.FC<PropsType> = ({profile, isOwner, saveAvatar}) => {
    const uploadAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
            e.target.files && saveAvatar(e.target.files[0])
    }
    return (
        <div>
            <div>
                {
                    profile?.photos.small
                    ? <img src={profile.photos.small} alt="ava" className={classes.ava}/>
                    :<img src={altAvatar} alt="avatar" className={classes.altAva}/>
                }
                {
                    isOwner && <input type="file" onChange={uploadAvatarHandler}/>
                }
                <p>{profile?.fullName}</p>
                <p>{profile?.aboutMe}</p>
                <p>{profile?.contacts.instagram}</p>
            </div>
        </div>
    )
}

  
import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from 'redux/profile-page-reducer';
import MyPosts from 'components/Profile/MyPosts/MyPostsContainer';
import {ProfileStatusWithHooks} from 'components/Profile/ProfileInfo/profile-status-with-hooks';

type PropsType = {
    profile?: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveAvatar:(image: File) => void
}

export const Profile: React.FC<PropsType> = ({profile, updateStatus, status, isOwner, saveAvatar}) => {

    return (
        <div>
            <h2>Profile: {profile?.fullName}</h2>
            <ProfileStatusWithHooks updateStatus={updateStatus} status={status} />
            <ProfileInfo profile={profile} isOwner={isOwner} saveAvatar={saveAvatar}/>
            <MyPosts
            />
        </div>
    )
}
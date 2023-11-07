import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from 'redux/profile-page-reducer';
import MyPosts from 'components/Profile/MyPosts/MyPostsContainer';
import {ProfileStatusWithHooks} from 'components/Profile/ProfileInfo/profile-status-with-hooks';

type ProfilePropsType = {
    profile?: ProfileType
    status: string
    updateStatus: (status: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <h2>Profile: {props.profile?.fullName}</h2>
            {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
            <ProfileInfo profile={props.profile}/>
            <MyPosts
            />
        </div>
    )
}
import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from 'redux/profile-page-reducer';
import ProfileStatus from 'components/Profile/ProfileInfo/profile-status';

type ProfilePropsType = {
    profile?: ProfileType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <h2>Profile: {props.profile?.fullName}</h2>
            <ProfileStatus status={'I good'} />
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                title={'My profile'}
            />
        </div>
    )
}
import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-page-reducer';

type ProfilePropsType = {
    profile?: ProfileType
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <h2>Profile: {props.profile?.fullName}</h2>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                title={'My profile'}
            />
        </div>
    )
}
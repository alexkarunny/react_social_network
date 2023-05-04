import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-page-reducer';

type ProfilePropsType = {
    title: string
    profile?: ProfileType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                title={'My profile'}
            />
        </div>
    )
}
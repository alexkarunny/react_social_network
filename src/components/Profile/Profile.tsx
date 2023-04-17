import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    title: string
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ProfileInfo/>
            <MyPostsContainer
                title={'My profile'}
            />
        </div>
    )
}
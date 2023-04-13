import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes} from '../../redux/store';
import {postType} from '../../redux/profile-page-reducer';

type ProfilePropsType = {
    title: string
    posts: postType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ProfileInfo/>
            <MyPosts title={'My Posts'}
                     posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
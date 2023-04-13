import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes} from '../../redux/store';
import {postType} from '../../redux/profile-page-reducer';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

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
            <MyPostsContainer
                     posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    )
}
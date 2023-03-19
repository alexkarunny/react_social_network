import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postType} from '../../redux/state';

type ProfilePropsType = {
    title: string
    posts: postType[]
    addPostCallback: (textPost: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ProfileInfo/>
            <MyPosts title={'My Posts'} posts={props.posts} addPostCallback={props.addPostCallback}/>
        </div>
    )
}
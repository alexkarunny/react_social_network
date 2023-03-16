import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {postTextType} from '../../redux/state';

type FooterPropsType = {
    title: string
    postsTexts: postTextType[]
}

export const Profile = (props: FooterPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ProfileInfo/>
            <MyPosts title={'My Posts'} postsTexts={props.postsTexts}/>
        </div>
    )
}
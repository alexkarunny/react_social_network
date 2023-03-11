import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type FooterPropsType = {
    title: string
}

export const Profile = (props: FooterPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ProfileInfo/>
            <MyPosts title={'My Posts'}/>
        </div>
    )
}
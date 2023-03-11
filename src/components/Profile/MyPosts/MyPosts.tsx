import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from './Post/Post';


type MyPostsPropsType = {
    title: string
}

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <div>
                <textarea>New Post</textarea>
                <button>Send</button>
            </div>
            <Post postText={'Today is a great day'}/>
            <Post postText={'I\'ll achieve the target'}/>
        </div>
    )
}
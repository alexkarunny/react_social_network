import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postTextType} from '../../../redux/state';


type MyPostsPropsType = {
    title: string
    postsTexts: postTextType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <div>
                <div>
                    <textarea>New Post</textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={classes.postGroup}>
                {props.postsTexts.map((p, i) => <Post key={i} postText={p.textPost}/>)}
            </div>
        </div>
    )
}
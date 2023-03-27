import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postType} from '../../../redux/state';


type MyPostsPropsType = {
    title: string
    posts: postType[]
    addPostCallback: () => void
    newPostText: string
    addNewPostTextCallback: (newTextPost: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const onChangeAddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addNewPostTextCallback(e.currentTarget.value)
    }

    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <div>
                <div>
                    <textarea onChange={onChangeAddPostHandler} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={props.addPostCallback}>Send</button>
                </div>
            </div>
            <div className={classes.postGroup}>
                {props.posts.map((p, i) => <Post key={p.id + i} textPost={p.textPost} id={p.id}
                                                 likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}
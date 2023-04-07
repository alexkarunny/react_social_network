import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsTypes, postType} from '../../../redux/state';


type MyPostsPropsType = {
    title: string
    posts: postType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string

}

export const MyPosts = (props: MyPostsPropsType) => {

    const onChangeAddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'ADD-NEW-POST-TEXT', newPostText: e.currentTarget.value})
    }
    const onClickAddPostHandler = () => {
        props.dispatch({type: 'ADD-POST'})
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
                    <button onClick={onClickAddPostHandler}>Send</button>
                </div>
            </div>
            <div className={classes.postGroup}>
                {props.posts.map((p, i) => <Post key={p.id + i} textPost={p.textPost} id={p.id}
                                                 likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}
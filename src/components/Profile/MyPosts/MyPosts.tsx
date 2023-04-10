import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsTypes, postType} from '../../../redux/state';
import {AddNewPostTextAC, AddPostAC} from '../../../redux/profile-page-reducer';


type MyPostsPropsType = {
    title: string
    posts: postType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string

}

export const MyPosts = (props: MyPostsPropsType) => {

    const onChangeAddTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(AddNewPostTextAC(e.currentTarget.value))
    }
    const onClickAddPostHandler = () => {
        props.dispatch(AddPostAC())
    }
    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <div>
                <div>
                    <textarea onChange={onChangeAddTextHandler} value={props.newPostText}/>
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
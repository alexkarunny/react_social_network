import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postType} from '../../../redux/state';


type MyPostsPropsType = {
    title: string
    posts: postType[]
    addPostCallback: (textPost: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let newPostTextRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostTextRef.current) {
            props.addPostCallback(newPostTextRef.current?.value)
        }
    }

    return (
        <div>
            <h3>
                {props.title}
            </h3>
            <div>
                <div>
                    <textarea ref={newPostTextRef}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            <div className={classes.postGroup}>
                {props.posts.map((p, i) => <Post key={p.id + i} textPost={p.textPost} id={p.id}
                                                 likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}
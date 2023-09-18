import {addPost, postType} from 'redux/profile-page-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';
import React from 'react';
import {compose} from 'redux';

type mapStatePropsType = {
    posts: postType[]
}

export type mapDispatchPropsTypePosts= {
    addPost: (post: string) => void
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.postsTexts,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addPost})
)(MyPosts)


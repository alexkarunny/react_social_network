import {addNewPostText, addPost, postType} from '../../../redux/profile-page-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type mapStatePropsType = {
    posts: postType[]
    newPostText: string
}

type mapDispatchPropsType= {
    onChangeAddTextHandler: (title: string) => void
    onClickAddPostHandler: () => void
}

const mapStateToProps = (state: RootStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.postsTexts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType  => {
    return {
        onChangeAddTextHandler: (title) => {
            dispatch(addNewPostText(title))
        },
        onClickAddPostHandler: () => {
            dispatch(addPost())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

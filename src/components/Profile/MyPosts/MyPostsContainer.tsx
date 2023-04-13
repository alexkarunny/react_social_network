import {AddNewPostTextAC, AddPostAC, postType} from '../../../redux/profile-page-reducer';
import {ActionsTypes} from '../../../redux/store';
import {MyPosts} from './MyPosts';

type MyPostsContainerPropsType = {
    posts: postType[]
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    const onChangeAddTextHandler = (title: string) => {
        props.dispatch(AddNewPostTextAC(title))
    }
    const onClickAddPostHandler = () => {
        props.dispatch(AddPostAC())
    }

    return (
        <div>
            <MyPosts title={'My Posts'}
                     posts={props.posts}
                     newPostText={props.newPostText}
                     onChangeAddTextHandler={onChangeAddTextHandler}
                     onClickAddPostHandler={onClickAddPostHandler}
            />
        </div>
    )
}
import React, {memo} from 'react';
import classes from './MyPosts.module.css'
import {Post} from './Post/Post';
import { postType} from 'redux/profile-page-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {mapDispatchPropsTypePosts} from 'components/Profile/MyPosts/MyPostsContainer';
import {maxLength, required} from 'utils/validators/validators';
import {Textarea} from 'components/Common/formControls/Textarea/FormControls';




type MyPostsPropsType = {
    posts: postType[]
} & mapDispatchPropsTypePosts

const maxLength20 = maxLength(20)

export const MyPosts = memo((props: MyPostsPropsType) => {

    const onSubmitHandler = (formData: FormDataType) => {
        console.log(formData)
        props.addPost(formData.textarea)
    }
    return (
        <div>
            <h3>

            </h3>
            <PostsReduxForm onSubmit={onSubmitHandler}/>
            <div className={classes.postGroup}>
                {props.posts.map((p, i) => <Post key={p.id + i}
                                                 textPost={p.textPost}
                                                 id={p.id}
                                                 likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
})

const PostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} placeholder={'Write post'} name={'textarea'} validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostsReduxForm = reduxForm<FormDataType>({
    form: 'posts'
})(PostsForm)

type FormDataType = {
    textarea: string
}
import classes from './Post.module.css'
import ava from '../../../../src/images/ava.jpg'

type PostPropsType = {
    postText: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            <div>
                <img src={ava} alt="" className={classes.ava}/>
                <span>{props.postText}</span>
            </div>
            <div>
                <span>2 like&nbsp;</span>
                <span>0 dislike</span>
            </div>
        </div>
    )
}

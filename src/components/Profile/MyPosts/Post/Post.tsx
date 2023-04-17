import classes from './Post.module.css'
import ava from '../../../../src/images/ava.jpg'

type PostPropsType = {
    id: string
    textPost: string
    likesCount: number
}


export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.post}>
            <div>
                <img src={ava} alt="" className={classes.ava}/>
                <span>{props.textPost}</span>
            </div>
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
}

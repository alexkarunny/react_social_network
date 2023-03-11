import classes from './Video.module.css'

type VideoPropsType = {
    title: string
}

export const Video = (props: VideoPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}
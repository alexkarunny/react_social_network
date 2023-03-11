import classes from './Friends.module.css'

type FriendsPropsType = {
    title: string
}

export const Friends = (props: FriendsPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}
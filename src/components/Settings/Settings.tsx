import classes from './Settings.module.css'

type SettingsPropsType = {
    title: string
}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

import classes from './Dialogs.module.css'

type DialogsPropsType = {
    title: string
}

export const Dialogs = (props: DialogsPropsType) => {
  return (
      <div>
          <h2>{props.title}</h2>
      </div>
  )
}
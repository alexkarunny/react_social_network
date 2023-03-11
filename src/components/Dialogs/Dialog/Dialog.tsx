
import {NavLink} from 'react-router-dom';
import classes from './Dialog.module.css'

type DialogPropsType = {
    id: number
    dialogName: string
}

export const Dialog = (props:DialogPropsType) => {
    let path = `/dialogs/${props.id}`

  return (
      <div className={classes.dialog_item}>
          <NavLink to={path} activeClassName={classes.active}>{props.dialogName}</NavLink>
      </div>
  )
}
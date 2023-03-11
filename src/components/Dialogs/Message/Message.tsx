import classes from './Message.module.css';


type MessagePropsType = {
    messageText: string
}

export const Message = (props:MessagePropsType) => {
  return (
      <div className={classes.message_item}>{props.messageText}</div>
  )
}
import classes from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {dialogNameType, messageTextType} from '../../redux/state';

type DialogsPropsType = {
    title: string
    dialogsNames: dialogNameType[]
    messagesTexts: messageTextType[]
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <h2 className={classes.title}>{props.title}</h2>
            <div className={classes.dialogs_items}>
                {props.dialogsNames.map((d, i) => <Dialog key={d.id + i}
                                                          dialogName={d.dialogName}
                                                          id={d.id}/>)}
            </div>
            <div className={classes.messages_items}>
                {props.messagesTexts.map((m, i) => <Message key={i} messageText={m.messageText}/>)}
            </div>
        </div>
    )
}
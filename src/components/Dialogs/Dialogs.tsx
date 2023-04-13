import classes from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {ActionsTypes} from '../../redux/store';
import {ChangeEvent} from 'react';
import {AddMessageAC, AddNewMessageTextAC, dialogNameType, messageTextType} from '../../redux/dialogs-page-reducer';

type DialogsPropsType = {
    title: string
    newMessageText: string
    dialogsNames: dialogNameType[]
    messagesTexts: messageTextType[]
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const onChangeAddNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(AddNewMessageTextAC(e.currentTarget.value))
    }

    const onClickAddNewMessage = () => {
        props.dispatch(AddMessageAC())
    }

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
                <textarea value={props.newMessageText} onChange={onChangeAddNewMessageText}/>
                <button onClick={onClickAddNewMessage}>Add</button>
            </div>
        </div>
    )
}
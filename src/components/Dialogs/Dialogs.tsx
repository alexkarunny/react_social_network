import classes from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import React from 'react';
import {dialogNameType, messageTextType} from 'redux/dialogs-page-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {mapDispatchToPropsTypeDialogs} from 'components/Dialogs/DialogsContainer';

type DialogsPropsType = {
    dialogsNames: dialogNameType[]
    messagesTexts: messageTextType[]
} & mapDispatchToPropsTypeDialogs

export const Dialogs = (props: DialogsPropsType) => {

    const onSubmitHandler = (formData: FormDataType) => {
        props.addMessage(formData.textarea)
    }
    return (
        <div className={classes.dialogs}>
            <h2 className={classes.title}>Dialogs</h2>
            <div className={classes.dialogs_items}>
                {props.dialogsNames.map((d, i) => <Dialog
                    key={d.id + i}
                    dialogName={d.dialogName}
                    id={d.id}/>)}
            </div>
            <div className={classes.messages_items}>
                {props.messagesTexts.map((m, i) => <Message key={i} messageText={m.messageText}/>)}
                <AddMessageReduxForm onSubmit={onSubmitHandler} />
            </div>
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'Add message'} component={'textarea'} name={'textarea'} />
            <button>Add</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'addMessage'
})(AddMessageForm)

//types
type FormDataType = {
    textarea: string
}
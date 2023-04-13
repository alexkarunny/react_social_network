import {Dialogs} from './Dialogs';
import {AddMessageAC, AddNewMessageTextAC, dialogNameType, messageTextType} from '../../redux/dialogs-page-reducer';
import {ActionsTypes} from '../../redux/store';

type DialogsContainerPropsType = {
    newMessageText: string
    dialogsNames: dialogNameType[]
    messagesTexts: messageTextType[]
    dispatch: (action: ActionsTypes) => void
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const onChangeAddNewMessageText = (title: string) => {
        props.dispatch(AddNewMessageTextAC(title))
    }

    const onClickAddNewMessage = () => {
        props.dispatch(AddMessageAC())
    }

    return (
        <div>
            <Dialogs
                title={'My dialogs'}
                newMessageText={props.newMessageText}
                dialogsNames={props.dialogsNames}
                messagesTexts={props.messagesTexts}
                onChangeAddNewMessageText={onChangeAddNewMessageText}
                onClickAddNewMessage={onClickAddNewMessage}/>
        </div>
    )
}
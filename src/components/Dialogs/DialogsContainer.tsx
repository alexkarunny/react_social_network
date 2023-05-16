import {Dialogs} from './Dialogs';
import {AddMessageAC, AddNewMessageTextAC} from '../../redux/dialogs-page-reducer';
import {connect} from 'react-redux';
import {AllActionsType, RootStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

const mapStateToProps = (state: RootStateType) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsNames: state.dialogsPage.dialogsNames,
        messagesTexts: state.dialogsPage.messagesTexts,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AllActionsType>) => {
    return {
        onChangeAddNewMessageText: (title: string) => {
            dispatch(AddNewMessageTextAC(title))
        },
        onClickAddNewMessage: () => {
            dispatch(AddMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
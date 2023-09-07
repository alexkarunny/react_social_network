import {Dialogs} from './Dialogs';
import {AddMessageAC, AddNewMessageTextAC} from 'redux/dialogs-page-reducer';
import {connect} from 'react-redux';
import {AllActionsType, RootStateType} from 'redux/redux-store';
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from 'hoc/WithAuthRedirect';

const mapStateToProps = (state: RootStateType) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsNames: state.dialogsPage.dialogsNames,
        messagesTexts: state.dialogsPage.messagesTexts,
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

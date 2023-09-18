import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';
import {compose} from 'redux';
import {WithAuthRedirect} from 'hoc/WithAuthRedirect';
import React from 'react';
import {addMessage} from 'redux/dialogs-page-reducer';

const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsNames: state.dialogsPage.dialogsNames,
        messagesTexts: state.dialogsPage.messagesTexts,
    }
}

export type mapDispatchToPropsTypeDialogs = {
    addMessage: (message: string) => void
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
)(Dialogs)

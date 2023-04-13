import React from 'react';
import classes from './App.module.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {NavBar} from './components/Navbar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Friends} from './components/Friends/Friends';
import {Video} from './components/Video/Video';
import {Settings} from './components/Settings/Settings';
import {ActionsTypes} from './redux/store';
import {RootStateType} from './redux/redux-store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className={classes.app}>
                <Header title={'Header'}/>
                <NavBar title={'Menu'}/>
                <div className={classes.app_content}>
                    <Route path={'/profile'} render={() => <Profile title={'My Profile'}
                                                                    posts={props.state.profilePage.postsTexts}
                                                                    dispatch={props.dispatch}
                                                                    newPostText={props.state.profilePage.newPostText}
                    />}></Route>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer
                               dialogsNames={props.state.dialogsPage.dialogsNames}
                               messagesTexts={props.state.dialogsPage.messagesTexts}
                               newMessageText={props.state.dialogsPage.newMessageText}
                               dispatch={props.dispatch}
                           />}></Route>
                    <Route path={'/friends'} render={() => <Friends title={'My Friends'}/>}></Route>
                    <Route path={'/video'} render={() => <Video title={'My Video'}/>}></Route>
                    <Route path={'/settings'} render={() => <Settings title={'My Settings'}/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

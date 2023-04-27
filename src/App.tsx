import React from 'react';
import classes from './App.module.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {NavBar} from './components/Navbar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Friends} from './components/Friends/Friends';
import {Video} from './components/Video/Video';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';

function App() {
    return (
        <BrowserRouter>
            <div className={classes.app}>
                <Header title={'Header'}/>
                <NavBar title={'Menu'}/>
                <div className={classes.app_content}>
                    <Route path={'/profile'} render={() => <Profile title={'My Profile'}
                    />}></Route>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer title={'My dialogs'}
                           />}></Route>
                    <Route path={'/friends'} render={() => <Friends title={'My Friends'}/>}></Route>
                    <Route path={'/users'} render={() => <UsersContainer title={'All Users'} />}></Route>
                    <Route path={'/video'} render={() => <Video title={'My Video'}/>}></Route>
                    <Route path={'/settings'} render={() => <Settings title={'My Settings'}/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

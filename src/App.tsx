import React from 'react';
import classes from './App.module.css';
import {NavBar} from 'components/Navbar/NavBar';
import {BrowserRouter, Route} from 'react-router-dom';
import {Friends} from 'components/Friends/Friends';
import {Video} from 'components/Video/Video';
import {Settings} from 'components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from 'components/Login/Login';
import Dialogs from 'components/Dialogs/DialogsContainer';


function App() {
    return (
        <BrowserRouter>
            <div className={classes.app}>
                <HeaderContainer/>
                <NavBar title={'Menu'}/>
                <div className={classes.app_content}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}></Route>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                           />}></Route>
                    <Route path={'/friends'} render={() => <Friends title={'My Friends'}/>}></Route>
                    <Route path={'/users'} render={() => <UsersContainer title={'Users'}/>}></Route>
                    <Route path={'/video'} render={() => <Video title={'My Video'}/>}></Route>
                    <Route path={'/settings'} render={() => <Settings title={'My Settings'}/>}></Route>
                    <Route path={'/login'} render={() => <Login/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

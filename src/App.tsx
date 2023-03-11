import React from 'react';
import classes from './App.module.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {NavBar} from './components/Navbar/NavBar';
import {Dialogs} from './components/Dialogs/Dialogs';

function App() {
    return (
        <div className={classes.app}>
            <Header title={'Header'}/>
            <NavBar title={'Menu'}/>
            <div className={classes.app_content}>
                <Profile title={'Profile'}/>
                <Dialogs title={'Dialogs'}/>
            </div>

        </div>
    );
}

export default App;

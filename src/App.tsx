import React from 'react';
import classes from './App.module.css';
import {Header} from './components/Header/Header';
import {Profile} from './components/Profile/Profile';
import {NavBar} from './components/Navbar/NavBar';

function App() {
    return (
        <div className={classes.app}>
            <Header title={'Header'}/>
            <NavBar title={'Menu'}/>
            <Profile title={'Profile'}/>
        </div>
    );
}

export default App;

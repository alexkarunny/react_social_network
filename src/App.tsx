import React from 'react';
import classes from './App.module.css';
import {NavBar} from 'components/Navbar/NavBar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import {Friends} from 'components/Friends/Friends';
import {Video} from 'components/Video/Video';
import {Settings} from 'components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Dialogs from 'components/Dialogs/DialogsContainer';
import Login from 'components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';
import {Preloader} from 'components/Common/Preloader/Preloader';
import {initializeApp} from 'redux/app-reducer';

type MapDispatchPropsType = {
    initializeApp: () => void
}
type Props = ReturnType<typeof mapStateToProps> & MapDispatchPropsType

class App extends React.Component<Props> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
            if(!this.props.isInitialized) {
                return <Preloader />
            }
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
}

const mapStateToProps = (state: RootStateType) => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

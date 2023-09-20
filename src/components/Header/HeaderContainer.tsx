import React from 'react';
import {Header} from './Header';
import {logout, setUserData} from 'redux/auth-reducer';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';


type MapStatePropsType = {
    login: string | null
    email: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserData: () => void
    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.setUserData()
    }

    render() {
        return <Header email={this.props.email} isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}

const MapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
    }
}

export default connect(MapStateToProps, {setUserData, logout})(HeaderContainer);
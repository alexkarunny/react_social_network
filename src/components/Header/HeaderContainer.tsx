import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {AuthDataType, setUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';

export type AuthResponseType = {
    resultCode: number
    messages: []
    data: AuthDataType
}

type MapStatePropsType = {
    login: string | null
    email: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    setUserData: (data: AuthDataType) => void

}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get<AuthResponseType>(
            'https://social-network.samuraijs.com/api/1.0//auth/me', {
                withCredentials: true
            }).then(res => {
                if(res.data.resultCode === 0) {
                    this.props.setUserData(res.data.data)
                }
        })
    }

    render() {
        return <Header email={this.props.email} isAuth={this.props.isAuth} login={this.props.login} />
    }
}

const MapStateToProps = (state:RootStateType ): MapStatePropsType => {
    return {
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
    }
}

export default connect(MapStateToProps, {setUserData})(HeaderContainer);
import React from 'react';
import {Header} from './Header';
import {AuthDataType, setUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {usersApi} from '../../api/api';


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
        usersApi.auth().then(data => {
            if (data.resultCode === 0) {
                this.props.setUserData(data.data)
            }
        })
    }

    render() {
        return <Header email={this.props.email} isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const MapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
    }
}

export default connect(MapStateToProps, {setUserData})(HeaderContainer);
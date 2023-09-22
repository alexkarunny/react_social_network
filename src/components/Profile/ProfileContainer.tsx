import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';
import {clearStatus, ProfileType, setProfile, setUserStatus, updateStatus} from 'redux/profile-page-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from 'hoc/WithAuthRedirect';
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile?: ProfileType
    status: string
    userId: number | null
}

type MapDispatchPropsType = {
    setProfile: (userId: string) => void
    setUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
    clearStatus: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>


const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.id
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.userId?.toString()
        if (userId) {
            this.props.setProfile(userId)
            this.props.setUserStatus(userId)
        } else {
            this.props.history.push('/login')
        }

    }

    componentWillUnmount() {
        this.props.clearStatus()
    }

    render() {
        return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setProfile, setUserStatus, updateStatus, clearStatus}),
    WithAuthRedirect,
    withRouter
)(ProfileContainer)


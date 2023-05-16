import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {getProfile, ProfileType} from '../../redux/profile-page-reducer';
import axios from 'axios';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string
}

type OwnProps = {
    title: string
}


type MapStatePropsType = {
    profile?: ProfileType
    isAuth: boolean
}

type MapDispatchPropsType = {
    getProfile: (profile: ProfileType) => void
}

type PropsType = OwnProps & MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>


const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId || '2'
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.getProfile(response.data)
            })
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return <div>
            <Profile title={this.props.title} profile={this.props.profile}/>
        </div>
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(ProfileContainerWithRouter)


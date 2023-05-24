import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {getProfile, ProfileType} from '../../redux/profile-page-reducer';
import axios from 'axios';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile?: ProfileType
}

type MapDispatchPropsType = {
    getProfile: (profile: ProfileType) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>


const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
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
        return <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    }
}

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default WithAuthRedirect(connect(mapStateToProps, {getProfile})(ProfileContainerWithRouter))


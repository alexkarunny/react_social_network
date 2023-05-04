import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {getProfile, ProfileType} from '../../redux/profile-page-reducer';
import axios from 'axios';

type OwnProps = {
    title: string
}

type MapStatePropsType = {
    profile?: ProfileType
}

type MapDispatchPropsType = {
    getProfile: (profile: ProfileType ) => void
}

type PropsType = OwnProps & MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType  => {
   return {
       profile: state.profilePage.profile
   }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                console.log(response)
                this.props.getProfile(response.data)
            })
    }

    render() {
        return <div>
            <Profile title={this.props.title} profile={this.props.profile}/>
        </div>
    }
}

export default connect(mapStateToProps, {getProfile})(ProfileContainer)


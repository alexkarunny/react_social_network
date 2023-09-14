import React, {ChangeEvent} from 'react';

type Props = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<Props> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if(this.props.status !== this.state.status) {
            this.props.updateStatus(this.state.status)
        }
    }

    changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input onChange={this.changeStatusHandler} value={this.state.status} autoFocus={true} onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
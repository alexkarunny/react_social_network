import React from 'react';

type Props = {
    status: string
}

class ProfileStatus extends React.Component<Props> {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input value={this.props.status} autoFocus={true} onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
import React, {ChangeEvent, useEffect, useState} from 'react';

type Props = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<Props> = ({status, updateStatus}) => {

    const [editMode, setEditMode] = useState(false)
    const [newStatus, setStatus] = useState(status)
    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(newStatus)
    }
    useEffect(() => {
        setStatus(status)
    }, [status])
    const changeStatusHandler = (e:ChangeEvent<HTMLInputElement> ) => setStatus(e.currentTarget.value)

    return (
        <div>
            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{status || '----'}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={changeStatusHandler} value={newStatus} autoFocus={true} onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )
}


import classes from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';

type DialogsPropsType = {
    title: string
}

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <h2 className={classes.title}>{props.title}</h2>
            <div className={classes.dialogs_items}>
                <Dialog dialogName={'Ivan'} id={1}/>
                <Dialog dialogName={'Lera'} id={2}/>
                <Dialog dialogName={'Snupp'} id={3}/>
                <Dialog dialogName={'Baza'} id={4}/>
                <Dialog dialogName={'Andrew'} id={5}/>
            </div>
            <div className={classes.messages_items}>
                <Message messageText={'Hi'}/>
                <Message messageText={'How are You?'}/>
                <Message messageText={'At the same time'}/>
            </div>
        </div>
    )
}
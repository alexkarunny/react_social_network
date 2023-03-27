import {addNewPostTextCallback, addPostCallback, stateProps} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

export const rerender = (state: stateProps) => {
    ReactDOM.render(
        <App state={state}
             addPostCallback={addPostCallback}
             addNewPostTextCallback={addNewPostTextCallback}/>,
        document.getElementById('root')
    )
}
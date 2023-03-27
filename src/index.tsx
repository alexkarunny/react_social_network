import './index.css';
import {addNewPostTextCallback, addPostCallback, state, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';

const rerender = () => {
    ReactDOM.render(
        <App state={state}
             addPostCallback={addPostCallback}
             addNewPostTextCallback={addNewPostTextCallback}/>,
        document.getElementById('root')
    )
}

rerender()

subscribe(rerender)
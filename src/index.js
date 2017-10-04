import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

const attendeeList = [{
    name: 'Charlie Kelly',
    color: '#E74C3C',
    id: Math.floor(Math.random()*10000)
}, {
    name: 'Mac',
    color: '#553285',
    id: Math.floor(Math.random()*10000)
}, {
    name: 'Frank Reynolds',
    color: '#296AA8',
    id: Math.floor(Math.random()*10000)
}, {
    name: 'Deandra Reynolds',
    color: '#202020',
    id: Math.floor(Math.random()*10000)
}, {
    name: 'Dennis Reynolds',
    color: '#287572',
    id: Math.floor(Math.random()*10000)
}, ];

let store = createStore(reducer, attendeeList);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


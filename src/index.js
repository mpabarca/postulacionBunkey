import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 
, document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import AppRouter from "./app/router/AppRouter"
import {Provider} from "react-redux"
import configureStore from "./app/store/store"

import "./app/static/css/common.less"
import "./app/static/css/font.css"

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

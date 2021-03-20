import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "../src/css/bootstrap/css/bootstrap.min.css";
//import "../src/css/shop-homepage.css"
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Services/reducers/reducer'
import swDev from './swDev'


const store=createStore(rootReducer)



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

//swDev();
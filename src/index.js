import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";


import reducers from './reducers/index'
import App from './App'

const store = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={store(reducers)}>        
        <App />
    </Provider>, document.getElementById('root'));


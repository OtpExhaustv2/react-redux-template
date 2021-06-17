import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {logger} from "redux-logger";
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger)) // remove on prod
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
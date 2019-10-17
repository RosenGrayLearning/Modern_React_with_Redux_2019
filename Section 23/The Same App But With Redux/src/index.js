import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


import reducers from './reducers';


const store = createStore(reducers);
const provider = <Provider  store={store}> <App/> </Provider>;
const root = document.querySelector('#root');

ReactDOM.render(provider,root);

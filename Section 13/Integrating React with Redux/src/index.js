 import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import reducers from './reducers';


const root = document.querySelector('#root'),
      store = createStore(reducers),
      wrappedAppByProvider = <Provider store={store}><App/></Provider>;

ReactDOM.render(wrappedAppByProvider,root);
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// we need to install and import 'react-redux' 
// because Redux itself is not connected to React
// Provider is a wrapper component that allows us to inject our store into React components
// We need combineReducers to combine our counterReducer and resultReducer
import { createStore, combineReducers } from 'redux';

// import reducer from its own files
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// map the imported reducers to separate sections of the app
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// Store
// initialized with reducer passed to it
const store = createStore(rootReducer);

// We wrap our app into Provider imported from 'react-redux'
// to hook the Provider up with our store we need to add a property to it and pass the store
// Now store is connected to our React app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

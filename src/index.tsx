import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './redux/reducers/cartReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import configureStore from './redux/store';

const store = configureStore();

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
//   );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
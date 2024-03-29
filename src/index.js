import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux';
import getProductListReducer from './reducers/index'
import cart from './reducers/cart'
const reducer = combineReducers({
  gp: getProductListReducer,
  c: cart
})
const store = createStore(reducer)
console.log("store: ",getProductListReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
     ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

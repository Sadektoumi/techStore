import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';


const domain="dev-1xnr076u.us.auth0.com"
const clientId = "x93KBZnFU0pu1PbltH9FCoCnjugX7dta"
console.log("domain",domain)
console.log("clientId",clientId)

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();
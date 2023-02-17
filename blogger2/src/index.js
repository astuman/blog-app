import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './store/store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
    <App />
    </Provider>

);

reportWebVitals();

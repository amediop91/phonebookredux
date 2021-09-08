import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
 </Provider>
 </React.StrictMode>,
  document.getElementById('root')
);

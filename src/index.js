import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import App from './routes/App';
// import store from './redux/store';

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/react-demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";

render(
    // <Provider store={store}>
        <App />
    // </Provider>
    ,
    document.getElementById('root')
);

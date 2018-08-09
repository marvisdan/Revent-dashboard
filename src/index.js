import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './app/store/configureStore';

const store = configureStore();

const rootEl = document.getElementById('root');

var render  = function() {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootEl
  );
}

if(module.hot) {
  module.hot.accept('./app/layout/App', function() {
    setTimeout(render)
  })
}

render();

registerServiceWorker();

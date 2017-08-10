import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import RouterMap from './Route'

ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();

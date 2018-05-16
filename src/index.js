import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserContent from './components/UserContent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserContent />, document.getElementById('root'));
registerServiceWorker();

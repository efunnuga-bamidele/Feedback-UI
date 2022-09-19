import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';

import './index.css'
import App from './App'


const appRoot = document.getElementById('root');
const root = createRoot(appRoot);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    );
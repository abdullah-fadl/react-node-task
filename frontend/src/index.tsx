import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Create root
root.render( // Use the new `render` method from the root
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import JobsContext from './store/JobsContext';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <JobsContext>
        <App />
      </JobsContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

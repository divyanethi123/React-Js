import React from 'react';
import ReactDOM from 'react-dom/client';
import CreateEmployee from './CreateEmployee';
import Employee from './Employee';
// import App from './App';

import Student from './Student';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Welcome from './welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Welcome/> */}
    {/* <Employee/> */}
    {/* <Student/> */}
    <CreateEmployee/>
  </React.StrictMode>
);



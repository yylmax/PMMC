import React from 'react';
import ReactDOM from 'react-dom/client';
import All from './app/All';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
//import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <All />
  </React.StrictMode>
  </BrowserRouter>
);
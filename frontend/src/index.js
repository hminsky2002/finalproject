import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ProgramContextProvider} from "./context/ProgramContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ProgramContextProvider>
    <App />
      </ProgramContextProvider>
  </React.StrictMode>
);



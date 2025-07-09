import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyInteractiveWidget from './MyInteractiveWidget';

const container = document.getElementById('root'); // Get the div from your HTML
if (container) { // Check if the div exists
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <MyInteractiveWidget />
    </React.StrictMode>
  );
} else {
  console.error("Could not find element with ID 'root'.");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

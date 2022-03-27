import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {RentingProvider} from './context/RentingContext';

ReactDOM.render(
  <RentingProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
   </RentingProvider>,
  document.getElementById('root')
)

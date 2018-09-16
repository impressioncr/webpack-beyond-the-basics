import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import './main.css'

ReactDom.hydrate(
  <App />,
  document.getElementById("react-root")
)
require('webpack-hot-middleware/client?reload=true')
require('./main.css')
require('./images/link.jpg')
require('./index.html')

import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

ReactDom.render(
  <App />,
  document.getElementById("react-root")
)
import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import { Provider} from "react-redux"
import store from "./store"
import { actionTest } from "./actions"
import './main.css'

ReactDom.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
)

store.dispatch(actionTest("New text"))
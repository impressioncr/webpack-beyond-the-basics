import React, { Component } from 'react'
import AppRoot from './components/AppRoot'
import { hot } from 'react-hot-loader'

class App extends Component {

  render() {
    return <AppRoot />
  }
}

export default hot(module)(App)

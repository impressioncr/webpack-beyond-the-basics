import React, { Component } from 'react'
import Counter from './counter'
import { hot } from 'react-hot-loader'

class App extends Component {

  render() {
    return <Counter />
  }
}

export default hot(module)(App)
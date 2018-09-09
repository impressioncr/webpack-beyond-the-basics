import React, { Component } from "react"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  climb() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div onClick={this.climb.bind(this)}>
        <div className="h1">{this.state.count}</div>
      </div>
    )
  }
}
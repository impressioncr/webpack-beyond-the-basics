import React from "react"

export default class extends React.Component {

  render() {
    return (
      <div className="profile">
        <img src={require("../images/link.jpg")} />
        <h1 className="h1">Beyond the Basics</h1>
        <div className="content">webpack</div>
      </div>
    )
  }
}
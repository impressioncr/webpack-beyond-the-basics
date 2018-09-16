import React from "react"
const imagePath = require("../images/link.jpg")

export default class extends React.Component {

  render() {
    return (
      <div className="profile">
        <img src={imagePath} />
        <h1 className="h1">Beyond the Basics</h1>
        <div className="content">webpack</div>
      </div>
    )
  }
}
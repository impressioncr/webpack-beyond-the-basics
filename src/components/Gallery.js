import React from "react"
import "../css/Gallery.css"

const getBundle = () => {
  import("lodash").then(_ => {
    console.log("imported", _)
  })
}

export default () => (
  <div className="gallery">
    <h1 onClick={getBundle}>Gallery</h1>
  </div>
)
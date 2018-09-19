import React from "react"
const imagePath = require("../images/link.jpg")
const MarkdownData = require("../../data/post.md")

export default () => (
  <div className="profile">
    <img src={imagePath} />
    <h1 className="h1">{MarkdownData.title}</h1>
    <div 
      className="content"
      dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
    / >
  </div>
)
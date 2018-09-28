import React from "react"
import { connect } from "react-redux"
import "../css/Article.css"

class Article extends React.Component {

  render () {
    return (
      <div className="article">
        <h1>{ this.props.title }</h1>
      </div>
    )
  }

}


export default connect(state => ({
  title: state.text,
  __content: state.text
}))(Article)
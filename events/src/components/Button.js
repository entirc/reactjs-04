import React, { Component } from 'react'
import styled from 'styled-components'

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.clickHandler} className={this.props.className}>
        {this.props.children}
      </button>
    )
  }
}

export default styled(Button)`
  font-size: 2em;
  font-family: Operator Mono, Raleway, sans-serif;
  color: #333;
  background-color: white;
  font-weight: bold;
  line-weight: 3px;
`

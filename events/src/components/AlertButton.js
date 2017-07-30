import React, { Component } from 'react'
import styled from 'styled-components'

class AlertButton extends Component {
  constructor(props) {
    super(props)
    // This binding is necessary to make `this` work in the callback
    // https://facebook.github.io/react/docs/handling-events.html
    this.dispatchAlert = this.dispatchAlert.bind(this)
  }

  render() {
    return (
      <button onClick={this.dispatchAlert} className={this.props.className}>
        {this.props.children}
      </button>
    )
  }

  dispatchAlert(event) {
    if (event.shiftKey) {
      const customEvent = new CustomEvent('onAlert', { detail: this.props.count })
      window.dispatchEvent(customEvent)
    }
  }

}

export default styled(AlertButton)`
  margin: 20px auto;
  font-size: 1em;
  height: 30px;
  font-family: Operator Mono, Raleway, sans-serif;
  color: #333;
  font-weight: bold;
  line-weight: 3px;
  background-color: #ff7777;
  display: block;
`

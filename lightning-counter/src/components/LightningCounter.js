import React, { Component } from 'react'
import styled from 'styled-components'
import * as Settings from '../settings'
//import createReactClass from 'create-react-class'

const CounterDisplay = styled.h1`
  color: #66FFFF;
  font-size: 50px;
`

//Usando React.Component
export default class LightningCounter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      strikes: 0
    }

    // This binding is necessary to make `this` work in the callback
    // https://facebook.github.io/react/docs/handling-events.html
    this.timerTick = this.timerTick.bind(this)
  }

  componentDidMount () {
    this.timerID = setInterval(
      this.timerTick, 
      Settings.UPDATE_RATE_MS
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render () {
    const count = this.state.strikes.toLocaleString(Settings.LOCALE)
    return (
      <CounterDisplay>
        {count}
      </CounterDisplay>
    )
  }

  timerTick () {
    this.setState({
      strikes: this.state.strikes + Settings.STRIKES_PER_ITERATION
    })
  }
}

/*

//Usando create-react-class
export default createReactClass({
  getInitialState: () => ({ strikes: 0 }),

  componentDidMount: function() {
    setInterval(
      this.timerTick, 
      Settings.UPDATE_RATE_MS
    )
  },

  render: function () {
    const count = this.state.strikes.toLocaleString(Settings.LOCALE)
    return (
      <CounterDisplay>
        {count}
      </CounterDisplay>
    )
  },

  timerTick: function() {
    this.setState({
      strikes: this.state.strikes + Settings.STRIKES_PER_ITERATION
    })
  }
})
*/

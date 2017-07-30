import React, { Component } from 'react'
import styled from 'styled-components'
import Counter from './Counter'
import Button from './Button'
import AlertButton from './AlertButton'

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 50px;
  background-color: #ffc53a;
  width: 700px;
  height: 200px;
  border-radius: 10px;
  text-align: center
`

export default class CounterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    // This binding is necessary to make `this` work in the callback
    // https://facebook.github.io/react/docs/handling-events.html
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.handleAlertEvent = this.handleAlertEvent.bind(this)
  }

  componentDidMount() {
    window.addEventListener('onAlert', this.handleAlertEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('onAlert', this.handleAlertEvent)
  }

  render() {
    return (
      <StyledContainer>
        <Counter display={this.state.count}/>
        <Button clickHandler={this.decrease}>-</Button>
        <Button clickHandler={this.increase}>+</Button>
        <AlertButton count={this.state.count}>Clique pressionando {"<shift>"} para exibir contagem atual com alert({this.state.count})</AlertButton>
      </StyledContainer>
    )
  }

  increase(event) {
    this.setState({ count: this.state.count + this.getStepSize(event) })
  }

  decrease(event) {
    this.setState({ count: this.state.count - this.getStepSize(event) })
  }

  handleAlertEvent(event) {
    console.log(event)
    alert(event.detail)
  }

  getStepSize(event) {
    return event.shiftKey ? 10 : 1
  }

}

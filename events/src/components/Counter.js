import React, { Component } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  font-size: 72px;
  font-family: Operator Mono, Raleway, sans-serif;
  color: ${props => parseInt(props.children) >= 0 ? '#7777ff' : '#ff5555' };
  font-weight: bold;
`

export default class Counter extends Component {
  render() {
    return (
      <StyledContainer>
        {this.props.display}
      </StyledContainer>
    )
  }
}

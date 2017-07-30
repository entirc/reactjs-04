import React, { Component } from 'react'
import LightningCounter from './LightningCounter'
import styled from 'styled-components'

const BaseText = styled.div`
  margin: 0;
  padding: 0;
`

const SmallEmphasisText = styled(BaseText)`
  font-weight: bold;
`

const EmphasisText = styled(BaseText)`
  font-weight: bold;
  font-size: 38px;

  &:hover {
    font-size: 50px;
  }
`

const SmallText = styled(BaseText)`
  font-size: 17px;
  opacity: 0.5;
`

const Display = styled.div`
  margin: 0 auto;
  width: 250px;
  text-align: center;
  background-color: black;
  padding: 40px;
  font-family: Operator Mono, Raleway, sans-serif;
  color: #999;
  border-radius: 10px;
`

export default class LightningCounterDisplay extends Component {
  render () {
    return (
      <Display>
        <LightningCounter />
        <SmallEmphasisText>LIGHTNING STRIKES</SmallEmphasisText>
        <EmphasisText>WORLDWIDE</EmphasisText>
        <SmallText>(since you loaded this example)</SmallText>
      </Display>
    )
  }
}

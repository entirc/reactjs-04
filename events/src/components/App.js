import React from 'react'
import styled from 'styled-components'
import CounterContainer from './CounterContainer'

const Container = styled.div`
  padding: 50px;
  background-color: #FFF;
`

export default () => (
  <Container>
    <CounterContainer />
  </Container>
)

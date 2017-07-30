import React from 'react'
import styled from 'styled-components'

export default styled.div`
  padding: 10px;
  margin: 20px;
  display: inline-block;
  background-color: ${props => props.bgColor};
  border-radius: 50%;
  width: 100px;
  height: 100px;
`

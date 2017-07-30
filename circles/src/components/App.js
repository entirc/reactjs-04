import React from 'react'
import styled from 'styled-components'
import Circle from './Circle'

const Container = styled.div`
  padding: 50px;
  background-color: #FFF;
`

const getRandomCircle = () => {
  const colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363']
  const ran = Math.floor(Math.random() * colors.length)
  // return a Circle with a randomly chosen color
  return <Circle bgColor={colors[ran]}/>
}

const getMultiplesCircles = () => {
  const colors = ['#393E41', '#E94F37', '#1C89BF', '#A1D363', 
                  '#85FFC7', '#297373', '#FF8552', '#A40E4C']
  return colors.map(
    (color, index) => 
      <Circle key={index + color} bgColor={color}/>
  )
}

export default () => (
  <Container>
    {getRandomCircle()}
    {getMultiplesCircles()}
  </Container>
)

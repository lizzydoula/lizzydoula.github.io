// libs
import React from 'react'
import styled from 'react-emotion'

const Svg = styled.svg`
  width: 113px;
  height: 122px;
  fill: ${({ theme }) => theme.colors.almond_frost};
`

const HeartIcon = props => (
  <Svg viewBox="0 0 113 122" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M5.14425 11.5534C-16.0781 40.0558 33.4707 97.0605 60.8978 122C80 104.5 131.5 51.5 105.861 11.5534C96.0816 -3.68221 64.9445 17.4914 60.8978 32.9302C51.1559 13.9286 26.3666 -16.9489 5.14425 11.5534Z" />
  </Svg>
)

export { HeartIcon }

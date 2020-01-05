// libs
import React from 'react'
import styled from 'react-emotion'

// constants
import { theme } from '../../../config/theme'

const DividerElement = styled.hr`
  height: ${props => props.height / 2}px;
  background: transparent;
  margin: 0;

  @media (min-width: ${theme.breakpoints.lg}) {
    height: ${props => props.height}px;
  }
`

const Divider = ({ height = 80 }) => <DividerElement height={height} />

export { Divider }

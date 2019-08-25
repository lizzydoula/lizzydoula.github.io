import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  max-width: ${props => props.theme.breakpoints.l};
`

const Container = ({ children, className }) => <Wrapper className={className}>{children}</Wrapper>

export { Container }

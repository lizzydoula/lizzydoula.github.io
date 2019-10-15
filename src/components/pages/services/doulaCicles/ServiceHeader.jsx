// libs
import React from 'react'
import styled, { cx, css } from 'react-emotion'

// components

// constants
import theme from '../../../../../config/theme'

const Root = styled.div`
  position: relative;
  height: 400px;
`

const Image = styled.img`
  display: block;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`

const Place = styled.div`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  text-align: center;
`

const Title = styled.h1`
  color: ${theme.colors.white};
  text-align: center;
  font-size: 48px;
  line-height: 56px;
  font-weight: 400;
  margin: 16px 0;

  @media (min-width: ${theme.breakpoints.sm}) {
    font-size: 60px;
    line-height: 64px;
  }
`

const Description = styled.div`
  color: ${theme.colors.white};
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  max-width: 300px;
  margin: 0 auto;
`

const ServiceHeader = ({ className, imageSrc = '', place = '', title = '', description = '' }) => (
  <Root className={className}>
    {imageSrc && <Image src={imageSrc} />}
    <Content>
      {place && <Place>{place}</Place>}
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </Content>
  </Root>
)

export { ServiceHeader }

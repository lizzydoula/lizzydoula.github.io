// libs
import React from 'react'
import styled, { cx, css } from 'react-emotion'

// constants
import theme from '../../../../../config/theme'

const Card = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 64px 76px 80px;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.1);
    flex-direction: row;
  }
`

const CardImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  object-fit: cover;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  max-width: 388px;
  margin: 0 auto;
  text-align: center;
  margin-top: 32px;
  padding: 0 16px;

  @media (min-width: ${theme.breakpoints.lg}) {
    text-align: left;
    max-width: auto;
    margin-top: 0;
    margin-left: 64px;
    padding: 0;
  }
`

const CardInfoTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${theme.brand.text.primary};
  text-transform: uppercase;
  margin-bottom: 8px;

  @media (min-width: ${theme.breakpoints.lg}) {
    position: absolute;
    top: 0;
  }
`

const CardInfoPerson = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: ${theme.brand.text.primary};
  margin-bottom: 16px;
`

const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  margin: 0;
`

const DoulaCard = ({ className, imageSrc, title, person, description }) => (
  <Card className={className}>
    <CardImage src={imageSrc} width="388" height="388" />
    <CardInfo>
      <CardInfoTitle>{title}</CardInfoTitle>
      <CardInfoPerson>{person}</CardInfoPerson>
      <Text>{description}</Text>
    </CardInfo>
  </Card>
)

export { DoulaCard }

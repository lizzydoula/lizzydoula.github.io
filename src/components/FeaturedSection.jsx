// libs
import React from 'react'
import styled, { cx, css } from 'react-emotion'

// components
import { Typography } from 'components/UI/Typography'

// constants
import { theme } from '../../config/theme'

const Section = styled.section`
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

const Place = styled(Typography)`
  color: ${theme.colors.white};
  text-align: center;
`

const Title = styled(Typography)`
  color: ${theme.colors.white};
  text-align: center;
  margin: 16px 0;
  padding: 0 32px;
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 48px;
    line-height: 56px;
  }
`

const SubTitle = styled(Typography)`
  color: ${theme.colors.white};
  text-align: center;
  max-width: 300px;
  margin: 0 auto;
`

const FeaturedSection = ({ className, image, title, subTitle, place }) => (
  <Section className={className}>
    {image && <Image src={image.sizes.src} title={image.title} />}
    {title && (
      <Content>
        {place && <Place variant="caps">{place}</Place>}
        <Title variant="h1">{title}</Title>
        {subTitle && <SubTitle variant="body1">{subTitle}</SubTitle>}
      </Content>
    )}
  </Section>
)

export { FeaturedSection }

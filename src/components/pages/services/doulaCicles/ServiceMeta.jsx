// libs
import React from 'react'
import styled, { cx, css } from 'react-emotion'

// components
import { LocationIcon } from 'components/UI/Icons/LocationIcon'
import { GiftIcon } from 'components/UI/Icons/GiftIcon'
import { CalendarIcon } from 'components/UI/Icons/CalendarIcon'

// constants
import theme from '../../../../../config/theme'

const Root = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const Info = styled.div`
  @media (min-width: ${theme.breakpoints.lg}) {
    width: 360px;
  }
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: ${theme.brand.text.primary};
  margin-bottom: 16px;
  text-align: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    text-align: left;
  }
`
const Description = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  text-align: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    text-align: left;
  }
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 32px;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    margin-left: auto;
    margin-top: 0;
  }
`

const InfoListItem = styled.div`
  padding: 0 16px;
  min-width: 160px;
  text-align: center;
  margin-top: 32px;

  &:first-child {
    margin-top: 0;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    margin: 0;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    text-align: left;
    min-width: 160px;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    min-width: 200px;
  }
`

const Text = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  margin-top: 8px;
`

const ServiceMeta = ({ className, title = '', description = '', duration = '', location = '', bonus = '' }) => (
  <Root className={className}>
    <Info>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Info>
    <InfoList>
      <InfoListItem>
        <CalendarIcon />
        <Text>{duration}</Text>
      </InfoListItem>
      <InfoListItem>
        <LocationIcon />
        <Text>{location}</Text>
      </InfoListItem>
      <InfoListItem>
        <GiftIcon />
        <Text>{bonus}</Text>
      </InfoListItem>
    </InfoList>
  </Root>
)

export { ServiceMeta }

// libs
import React from 'react'
import styled from 'react-emotion'
import { renderDocument } from 'utils/contentful'
import { BLOCKS } from '@contentful/rich-text-types'

// components
import Img from 'gatsby-image'
import { Typography } from 'components/UI/Typography'
import { Divider } from 'components/UI/Divider'

// constants
import { theme } from '../../../../../config/theme'

const Section = styled.section`
  position: relative;
`

const Title = styled(Typography)`
  font-size: 32px;
  line-height: 40px;
  text-align: center;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 44px;
  }
`

const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 0;

  @media (min-width: ${theme.breakpoints.lg}) {
    align-items: flex-start;
    flex-direction: row;
  }
`

const ReviewsListItem = styled.li`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    margin: 0;
    width: 260px;
  }
`

const DefaultAvatar = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: ${theme.colors.chablis};
  background-image: url('/flower.png');
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 24px;
`

const Avatar = styled(Img)`
  border-radius: 50%;
  margin-bottom: 24px;
`

const Content = styled.div``

const Review = ({ avatar, author, content }) => (
  <div>
    {!avatar && <DefaultAvatar />}
    {avatar && <Avatar fixed={avatar.fixed} />}
    <Typography variant="caps" bottomMargin>
      {author}
    </Typography>
    <Content>{renderDocument(content)}</Content>
  </div>
)

const ServiceReviews = ({ className, title, reviews }) => {
  console.log(title)
  console.log(reviews)

  return (
    <Section className={className}>
      <Title variant="h2">{title}</Title>
      <Divider />
      <ReviewsList>
        {reviews.map(({ avatar, author, content }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ReviewsListItem key={index}>
            <Review avatar={avatar} author={author} content={content.json} />
          </ReviewsListItem>
        ))}
      </ReviewsList>
    </Section>
  )
}

export { ServiceReviews }

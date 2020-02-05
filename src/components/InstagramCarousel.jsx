// libs
import React from 'react'
import styled, { cx, css } from 'react-emotion'

// components
import Img from 'gatsby-image'
import { Typography } from 'components/UI/Typography'
import { FaComment, FaHeart } from 'react-icons/fa'
import { Divider } from 'components/UI/Divider'

// constants
import { theme } from '../../config/theme'

const Section = styled.section`
  // display: flex;
`

const CarouselTitle = styled(Typography)`
  font-size: 32px;
  line-height: 40px;
  text-align: center;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 44px;
  }
`

const Carousel = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all 0.3s ease 0s;
`

const LeftSide = styled.div`
  @media (min-width: ${theme.breakpoints.lg}) {
    width: 50%;
  }
`

const RightSide = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 50%;
  }
`

const Info = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.4s ease 0s;
`

const Node = styled.a`
  display: flex;
  position: relative;
  padding: 4px;

  @media (min-width: ${theme.breakpoints.lg}) {
    &:hover {
      ${Overlay} {
        opacity: 1;
      }
      ${Info} {
        opacity: 1;
      }
    }
  }
`

const IconHeart = styled(FaHeart)`
  fill: white;
  width: 24px;
  height: 24px;
  margin: 0 8px;
`

const IconComment = styled(FaComment)`
  fill: white;
  width: 24px;
  height: 24px;
  margin: 0 8px;
`

const MetadataValue = styled(Typography)`
  display: flex;
  color: white;
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`

const Post = ({ className, content }) => (
  <Node className={className} href={`https://www.instagram.com/p/${content.node.id}/`} target="_blank">
    <Img
      className={css`
        width: 100%;
      `}
      fluid={content.node.localFile.childImageSharp.fluid}
    />
    <Overlay />
    <Info>
      <MetadataValue variant="body2">
        <IconHeart />
        {content.node.likes}
      </MetadataValue>
      <MetadataValue variant="body2">
        <IconComment />
        {content.node.comments}
      </MetadataValue>
    </Info>
  </Node>
)

const InstagramCarousel = ({ className, title = 'Узнайте больше о моём подходе в инстаграмме:', posts }) => {
  const [lastPost, ...otherPosts] = posts

  console.log(posts)

  return (
    <Section className={className}>
      <CarouselTitle variant="h2">{title}</CarouselTitle>
      <Divider />
      <Carousel>
        <LeftSide>
          <Post content={lastPost} />
        </LeftSide>
        <RightSide>
          {otherPosts.map(post => (
            <Post
              css={css`
                width: 50%;
              `}
              key={post.node.id}
              content={post}
            />
          ))}
        </RightSide>
      </Carousel>
    </Section>
  )
}

export { InstagramCarousel }

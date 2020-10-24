// libs
import React from 'react'
import styled, { cx, css } from 'react-emotion'

// components
import { LiteYouTubeEmbed } from 'react-lite-youtube-embed'

const Section = styled.section``

const playButtonStyles = css`
  background-color: #f00 !important;
`

const ytLiteStyles = css`
  opacity: 0.95;

  &:before {
    content: none;
  }
`

const YouTubeVideo = ({ className, id, title }) => (
  <Section className={className}>
    <LiteYouTubeEmbed
      id={id}
      title={title}
      poster="maxresdefault"
      playerClass={`lty-playbtn ${playButtonStyles}`}
      wrapperClass={`yt-lite ${ytLiteStyles}`}
    />
  </Section>
)

export { YouTubeVideo }

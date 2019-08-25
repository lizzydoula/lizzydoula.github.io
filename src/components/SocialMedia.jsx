// libs
import React from 'react'
import styled, { css, cx } from 'react-emotion'

// components
import { YoutubeIcon } from './UI/Icons/YoutubeIcon'
import { InstagramIcon } from './UI/Icons/InstagramIcon'
import { FacebookIcon } from './UI/Icons/FacebookIcon'

const SocialMediaLayout = styled.div`
  display: flex;
  justify-content: center;
`

const verticalStyles = css`
  flex-direction: column;
`

const SocialMediaLink = styled.a`
  padding: 12px;
  display: inline-flex;
`

const SocialMedia = ({ className, vertical = false }) => (
  <SocialMediaLayout className={cx(className, { [verticalStyles]: vertical })}>
    <SocialMediaLink
      href="https://www.youtube.com/channel/UCAn9mBvc8dTjhDwYS3yjajg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <YoutubeIcon />
    </SocialMediaLink>
    <SocialMediaLink href="https://www.instagram.com/doula_lizzy/" target="_blank" rel="noopener noreferrer">
      <InstagramIcon />
    </SocialMediaLink>
    <SocialMediaLink href="https://www.facebook.com/doulalizzyCY" target="_blank" rel="noopener noreferrer">
      <FacebookIcon />
    </SocialMediaLink>
  </SocialMediaLayout>
)

export { SocialMedia }

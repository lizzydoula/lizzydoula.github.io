// libs
import React from 'react'
import styled, { css, cx } from 'react-emotion'
import { renderDocument } from 'utils/contentful'

// components
import { Container, Row, Col } from 'components/UI/Grid'
import { Layout } from 'components'
import { PromoImage } from 'components/PromoImage'
// import { SocialMedia } from 'components/SocialMedia'
import { Divider } from 'components/UI/Divider'
import { Typography } from 'components/UI/Typography'

// constants
import { theme } from '../../../../config/theme'

const Image = styled.img`
  display: none;
  object-fit: contain;
  @media (min-width: ${theme.breakpoints.lg}) {
    display: flex;
    margin: 0 0 0 auto;
  }
`

const widgetCol = css`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 32px;
  }
`

const leftPadding = css`
  @media (min-width: ${theme.breakpoints.lg}) {
    padding-left: 41px;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    padding-left: 97px;
  }
`

const AboutMeHeading = css`
  text-align: center;
  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 40px;
    line-height: 44px;
  }
  @media (min-width: ${theme.breakpoints.lg}) {
    text-align: left;
  }
`

const AboutMe = ({ title, text }) => (
  <Container>
    <Row>
      <Col xs={12} lg={6}>
        <div className={widgetCol}>
          <Typography className={AboutMeHeading} variant="h1" component="h2" bottomMargin>
            {title}
          </Typography>
          {renderDocument(text.json)}
        </div>
      </Col>
      <Col xs={12} lg={6}>
        <div className={widgetCol}>
          <Image src="/me-with-children.png" alt="Доула" width={372} height={372} />
        </div>
      </Col>
    </Row>
  </Container>
)

const Main = ({ data }) => {
  const { introTitle, introText } = data
  console.log('Data', data)

  return (
    <Layout>
      <Container noPadding>
        <Row noGutters>
          <Col xs={12}>
            <PromoImage src="/doula.jpg" />
          </Col>
        </Row>
      </Container>
      <Divider />
      <AboutMe title={introTitle} text={introText} />
      <Divider />
      <a href={`https:${data.brochurePdf.file.url}`} target="_blank" rel="noopener noreferrer">
        Download with original filename
      </a>
    </Layout>
  )
}

export { Main }

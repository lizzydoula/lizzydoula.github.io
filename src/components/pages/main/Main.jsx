// libs
import React from 'react'
import styled, { css, cx } from 'react-emotion'
import { renderDocument } from 'utils/contentful'

// components
import { LiteYouTubeEmbed } from 'react-lite-youtube-embed'
import { Container, Row, Col } from 'components/UI/Grid'
import { Layout } from 'components'
import { PromoImage } from 'components/PromoImage'
import { Divider } from 'components/UI/Divider'
import { Typography } from 'components/UI/Typography'
import { Button } from 'components/UI/Button'

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

const introVideoStyles = css`
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 48px;
  }
`

const playButtonStyles = css`
  background-color: #f00 !important;
`

const ytLiteStyles = css`
  opacity: 0.95;

  &:before {
    content: none;
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

const BrochureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.colors.gainsboro};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  @media (min-width: ${theme.breakpoints.lg}) {
    margin: 0 48px;
    flex-direction: row;
  }
`

const BrochureDescription = styled.div`
  flex: 1;
  text-align: center;
  padding: 64px 16px;
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 64px 32px 64px 64px;
    text-align: left;
  }
`

const BrochurePromo = styled.div`
  flex: 1;
  background-color: ${theme.colors.chablis};
  position: relative;
`

const brochureText = css`
  > p {
    font-size: inherit;
    line-height: inherit;
    margin-bottom: 0;
  }
`

const BrochureImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  object-fit: contain;
  @media (min-width: ${theme.breakpoints.lg}) {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`

const Brochure = ({ blockTitle, title, description, buttonTitle, pdf, bookletAsset }) => (
  <Container noPadding>
    <Row noGutters>
      <Col xs={12}>
        <BrochureWrapper>
          <BrochureDescription>
            <Typography variant="caps" bottomMargin>
              {blockTitle}
            </Typography>
            <Typography className={brochureText} variant="h1" component="h3" bottomMargin>
              {renderDocument(title.json)}
            </Typography>
            <Typography className={brochureText} variant="h5" component="div" bottomMargin>
              {renderDocument(description.json)}
            </Typography>
            <Button
              variant="contained"
              href={`https:${pdf.file.url}`}
              target="_blank"
              rel="noopener noreferrer"
              title={pdf.file.fileName}
            >
              {buttonTitle}
            </Button>
          </BrochureDescription>
          <BrochurePromo>
            <BrochureImage
              src={`https://${bookletAsset.file.url}`}
              title={bookletAsset.title}
              width="336"
              height="362"
            />
          </BrochurePromo>
        </BrochureWrapper>
      </Col>
    </Row>
  </Container>
)

const Main = ({ data }) => {
  const {
    introTitle,
    introText,
    introVideoId,
    introVideoTitle,
    brochureBlockTitle,
    brochureTitle,
    brochureDescription,
    brochureCta,
    brochurePdf,
    bookletAsset
  } = data
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
      <Container noPadding>
        <Row noGutters>
          <Col xs={12}>
            <div className={introVideoStyles}>
              <LiteYouTubeEmbed
                id={introVideoId}
                title={introVideoTitle}
                poster="maxresdefault"
                playerClass={`lty-playbtn ${playButtonStyles}`}
                wrapperClass={`yt-lite ${ytLiteStyles}`}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Divider />
      <Brochure
        blockTitle={brochureBlockTitle}
        title={brochureTitle}
        description={brochureDescription}
        buttonTitle={brochureCta}
        pdf={brochurePdf}
        bookletAsset={bookletAsset}
      />
      <Divider />
    </Layout>
  )
}

export { Main }

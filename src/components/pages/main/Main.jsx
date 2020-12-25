// libs
import React from 'react'
import styled, { css } from 'react-emotion'
import { renderDocument } from 'utils/contentful'

// components
import { Container, Row, Col } from 'components/UI/Grid'
import { Layout } from 'components'
import { PromoImage } from 'components/PromoImage'
import { Divider } from 'components/UI/Divider'
import { Typography } from 'components/UI/Typography'
import { Button } from 'components/UI/Button'
import { YouTubeVideo } from '../services/shared/YouTubeVideo'

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
  position: relative;
  display: flex;
  &.type-0 {
    padding-top: 32px;
    background-color: ${theme.colors.chablis};
  }
  &.type-1 {
    padding: 32px 0;
    background-color: ${theme.colors.just_right};
  }
`

const brochureTitle = css`
  font-size: 32px;
  line-height: 40px;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 44px;
  }

  @media (min-width: ${theme.breakpoints.xl}) {
    font-size: 60px;
    line-height: 64px;
  }

  > p {
    font-size: inherit;
    line-height: inherit;
    margin-bottom: 0;
  }
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
  object-fit: contain;
  max-width: 100%;
  .type-0 & {
    min-width: 320px;
    @media (min-width: ${theme.breakpoints.lg}) {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`

const Brochure = ({ blockTitle, title, description, buttonTitle, pdf, bookletAsset, type }) => (
  <Container noPadding>
    <Row noGutters>
      <Col xs={12}>
        <BrochureWrapper>
          <BrochureDescription>
            <Typography variant="caps" bottomMargin>
              {blockTitle}
            </Typography>
            <Typography className={brochureTitle} variant="h1" component="h3" bottomMargin>
              {title && renderDocument(title.json)}
            </Typography>
            <Typography className={brochureText} variant="h5" component="div" bottomMargin>
              {description && renderDocument(description.json)}
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
          <BrochurePromo className={type}>
            <BrochureImage src={`https://${bookletAsset.file.url}`} title={bookletAsset.title} />
          </BrochurePromo>
        </BrochureWrapper>
      </Col>
    </Row>
  </Container>
)

const Main = ({ data: { mainNavigation, pageContent } }) => {
  const { introTitle, introText, introVideoId, introVideoTitle, brochures } = pageContent

  return (
    <Layout mainNavigation={mainNavigation}>
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
            <YouTubeVideo className={introVideoStyles} id={introVideoId} title={introVideoTitle} />
          </Col>
        </Row>
      </Container>
      <Divider />
      {brochures.map(
        (
          {
            brochureEntryTitle,
            brochureBlockTitle,
            brochureTitle,
            brochureDescription,
            brochureCta,
            brochurePdf,
            brochureImage
          },
          index
        ) => (
          <div key={brochureEntryTitle}>
            <Brochure
              type={`type-${index}`}
              blockTitle={brochureBlockTitle}
              title={brochureTitle}
              description={brochureDescription}
              buttonTitle={brochureCta}
              pdf={brochurePdf}
              bookletAsset={brochureImage}
            />
            <Divider />
          </div>
        )
      )}
    </Layout>
  )
}

export { Main }

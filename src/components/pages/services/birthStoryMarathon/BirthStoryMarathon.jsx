// libs
import React from 'react'
import styled, { css, cx } from 'react-emotion'

// components
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'components/UI/Grid'
import { Layout } from 'components'
import { InstagramCarousel } from 'components/InstagramCarousel'
import { FeaturedSection } from 'components/FeaturedSection'
import { Divider } from 'components/UI/Divider'
import { CourseParticipationForm } from 'components/pages/services/shared/CourseParticipationForm'
import { DoulaCard } from 'components/pages/services/doulaCircles/DoulaCard'
import { CourseDescription } from '../shared/CourseDescription'
import { CoursePrerequisites } from '../shared/CoursePrerequisites'
import { CourseProgram } from '../shared/CourseProgram'
import { CourseFeatures } from '../shared/CourseFeatures'
import { ServiceReviews } from '../shared/ServiceReviews'

// constants
import config from '../../../../../config/website'
import { theme } from '../../../../../config/theme'

// content
import { content } from '../doulaCircles/content'

const BirthStoryMarathon = ({ data: { mainNavigation, pageContent } }) => {
  const {
    title,
    subtitleActive,
    subtitleInactive,
    isActive,
    place,
    courseImage,
    description,
    reason,
    program,
    features,
    instagramPosts,
    reviewsBlockTitle,
    reviews
  } = pageContent
  const subTitle = isActive ? subtitleActive : subtitleInactive

  return (
    <Layout mainNavigation={mainNavigation}>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <Container noPadding>
        <Row noGutters>
          <Col xs={12}>
            <FeaturedSection title={title} subTitle={subTitle} place={place} image={courseImage} />
          </Col>
        </Row>
      </Container>
      <Divider />
      <Container>
        <Row>
          <Col xs={12}>
            <CourseDescription content={description.json.content} />
          </Col>
        </Row>
      </Container>
      <Divider />
      {isActive && (
        <>
          <Container>
            <Row>
              <Col xs={12}>
                <CourseParticipationForm />
              </Col>
            </Row>
          </Container>
          <Divider />
        </>
      )}
      <Container>
        <Row>
          <Col xs={12}>
            <CoursePrerequisites content={reason.json.content} />
          </Col>
        </Row>
      </Container>
      <Divider />
      <Container>
        <Row>
          <Col xs={12}>
            <CourseProgram content={program.json.content} />
          </Col>
        </Row>
      </Container>
      <Divider />
      {isActive && (
        <>
          <Container>
            <Row>
              <Col xs={12}>
                <CourseParticipationForm />
              </Col>
            </Row>
          </Container>
          <Divider />
        </>
      )}
      <Container noPadding>
        <Row noGutters>
          <Col xs={12}>
            <InstagramCarousel posts={instagramPosts} />
          </Col>
        </Row>
      </Container>
      <Divider />
      <Container>
        <Row>
          <Col xs={12}>
            <CourseFeatures content={features.json.content} />
          </Col>
        </Row>
      </Container>
      <Divider />
      {isActive && (
        <>
          <Container>
            <Row>
              <Col xs={12}>
                <CourseParticipationForm />
              </Col>
            </Row>
          </Container>
          <Divider />
        </>
      )}
      <Container noPadding>
        <Row noGutters>
          <Col xs={12}>
            <DoulaCard
              css={css`
                @media (min-width: ${theme.breakpoints.lg}) {
                  margin: 0 32px;
                }
              `}
              imageSrc={content.card.image}
              title={content.card.title}
              person={content.card.person}
              description={content.card.description}
            />
          </Col>
        </Row>
      </Container>
      <Divider />
      <Container>
        <Row>
          <Col xs={12}>
            <ServiceReviews title={reviewsBlockTitle} reviews={reviews} />
          </Col>
        </Row>
      </Container>
      <Divider />
    </Layout>
  )
}

export { BirthStoryMarathon }

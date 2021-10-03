// libs
import React from 'react'
import styled, { css } from 'react-emotion'

// components
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'components/UI/Grid'
import { Layout } from 'components'
import { FeaturedSection } from 'components/FeaturedSection'
import { Divider } from 'components/UI/Divider'
import { InstagramCarousel } from 'components/InstagramCarousel'
import { ServiceMeta } from 'components/pages/services/doulaCircles/ServiceMeta'
import { ServiceProgram } from 'components/pages/services/doulaCircles/ServiceProgram'
import { DoulaCard } from 'components/pages/services/doulaCircles/DoulaCard'

import { CourseParticipationForm } from 'components/pages/services/shared/CourseParticipationForm'

// constants
import config from '../../../../../config/website'
import { theme } from '../../../../../config/theme'

// content
import { content } from './content'

const emptyPaddingStyles = {
  padding: '0'
}

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: ${theme.brand.text.primary};
  text-align: center;
  margin-bottom: 0;
`

const CourseSubscription = styled.div`
  text-align: center;
`

const Image = styled.img`
  display: block;
  margin: 0;
  width: 100%;
`

const CourseFeatureImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  top: -64px;
`

const CourseFeature = styled.div`
  margin: 32px 0;

  @media (min-width: ${theme.breakpoints.xl}) {
    padding-left: 64px;
    padding-right: 64px;
  }
`

const CourseFeatureTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: ${theme.brand.text.primary};
`

const CourseFeatureDescription = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
`

const cardStyles = css`
  @media (min-width: ${theme.breakpoints.lg}) {
    margin: 32px;
  }
`

const metaLayoutCss = css`
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 32px;
  }
`

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    align-items: flex-start;
    flex-direction: row;
  }
`

const Name = styled.div`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${theme.brand.text.primary};
  margin: 32px 0 16px;
`

const Content = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
`

const Avatar = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: ${theme.colors.chablis};
  background-image: url('/flower.png');
  background-repeat: no-repeat;
  background-position: center center;
`

const CardLayout = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    margin: 0;
    width: 260px;
  }
`

const ReviewCard = ({ name, description }) => (
  <CardLayout>
    <Avatar />
    <Name>{name}</Name>
    <Content>{description}</Content>
  </CardLayout>
)

const DoulaCircles = ({ data: { mainNavigation, pageContent } }) => {
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
      <Helmet title={`Доульский кружок | ${config.siteTitle}`} />
      <Container noPadding>
        <Row noGutters>
          <Col xs={12}>
            <FeaturedSection title={title} subTitle={subTitle} place={place} image={courseImage} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <Divider />
            <ServiceMeta
              className={metaLayoutCss}
              title={content.meta.title}
              description={content.meta.description}
              duration={content.meta.duration}
              location={content.meta.location}
              bonus={content.meta.bonus}
            />
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Heading>Программа курса</Heading>
            <Divider />
            <ServiceProgram />
            <Divider />
          </Col>
        </Row>
        {isActive && (
          <Row>
            <Col xs={12}>
              <CourseSubscription>
                <CourseParticipationForm />
              </CourseSubscription>
              <Divider />
            </Col>
          </Row>
        )}
      </Container>
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
          <Col xs={12} md={6}>
            <CourseFeature>
              <CourseFeatureTitle>Физиология</CourseFeatureTitle>
              <CourseFeatureDescription>
                Узнаете о физиологии родов и восстановительного периода. Поймете потребности женщины в послеродовом
                периоде и как помочь себе сохранить здоровье. Узнаете все, что вам интересно о грудном вскармливании и
                уходе за младенцем.
              </CourseFeatureDescription>
            </CourseFeature>
          </Col>
          <Col xs={12} md={6}>
            <CourseFeature>
              <CourseFeatureTitle>Делимся опытом</CourseFeatureTitle>
              <CourseFeatureDescription>
                Вы беременны впервые или вторым, третьим или шестым ребенком – не важно, тут вы найдете безопасное
                пространство, чтобы поделиться своими переживаниями и радостями и найдете ответы. Сможете проживать
                беременность в кругу понимающих людей, в безопасной обстановке и выговариваться.
              </CourseFeatureDescription>
            </CourseFeature>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <CourseFeature>
              <CourseFeatureTitle>Делаем упражнения</CourseFeatureTitle>
              <CourseFeatureDescription>
                Освоите новые техники расслабления и работы с болью. Примените на практике много упражнений -
                психологических, творческих, трансформационных, физических - которые станут качественной базой и опорой
                в уязвимые периоды жизни.
              </CourseFeatureDescription>
            </CourseFeature>
          </Col>
          <Col xs={12} md={6}>
            <CourseFeature>
              <CourseFeatureTitle>Отношения</CourseFeatureTitle>
              <CourseFeatureDescription>
                Научитесь эффективному взаимодействию с врачами и поймете, какие люди на каком этапе вам нужны. Будем
                говорить об отношениях в семье, с детьми, между детьми, со старшим поколением и как всё это выруливать.
              </CourseFeatureDescription>
            </CourseFeature>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <CourseFeature>
              <CourseFeatureTitle>Работаем с информацией</CourseFeatureTitle>
              <CourseFeatureDescription>
                Вы уже завалены медицинской информацией, но не понимаете, как с ней быть и что выбирать – тут узнаете,
                как работать с ней самостоятельно в период подготовки к родам и после, что облегчит вам жизнь и снимет
                тревожность.
              </CourseFeatureDescription>
            </CourseFeature>
          </Col>
          <Col xs={12} md={6}>
            <CourseFeature>
              <CourseFeatureImage src="/knowledge.png" width="336" height="362" />
            </CourseFeature>
          </Col>
        </Row>
        {isActive && (
          <Row>
            <Col xs={12}>
              <CourseSubscription>
                <CourseParticipationForm />
              </CourseSubscription>
              <Divider />
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12} style={emptyPaddingStyles}>
            <DoulaCard
              className={cardStyles}
              imageSrc={content.card.image}
              title={content.card.title}
              person={content.card.person}
              description={content.card.description}
            />
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Heading>Отзывы</Heading>
            <Divider />
            <Reviews>
              {content.reviews.map(({ name, description }) => (
                <ReviewCard key={name} name={name} description={description} />
              ))}
            </Reviews>
            <Divider />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export { DoulaCircles }

// libs
import React from 'react'
import styled from 'react-emotion'
import Modal from 'react-modal'

// components
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'components/UI/Grid'
import { Button } from 'components/UI/Button'
import { Typography } from 'components/UI/Typography'
import { Layout } from 'components/Layout'
import { FeaturedSection } from 'components/FeaturedSection'
import { Divider } from 'components/UI/Divider'
import { InstagramCarousel } from 'components/InstagramCarousel'
import { ServiceMeta } from 'components/pages/services/doulaCircles/ServiceMeta'
import { ServiceProgram } from 'components/pages/services/doulaCircles/ServiceProgram'
import { DoulaCard } from 'components/pages/services/doulaCircles/DoulaCard'
import { CourseParticipationForm } from 'components/pages/services/shared/CourseParticipationForm'

// config
import config from '../../../../../config/website'

// content
import { content } from './content'

const emptyPaddingStyles = {
  padding: '0'
}

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme }) => theme.brand.text.primary};
  text-align: center;
  margin-bottom: 0;
`

const CourseSubscription = styled.div`
  text-align: center;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding-left: 64px;
    padding-right: 64px;
  }
`

const CourseFeatureTitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme }) => theme.brand.text.primary};
`

const CourseFeatureDescription = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.brand.text.primary};
`

const StyledDoulaCard = styled(DoulaCard)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 32px;
  }
`

const StyledServiceMeta = styled(ServiceMeta)`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 32px;
  }
`

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    align-items: flex-start;
    flex-direction: row;
  }
`

const Name = styled.div`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.brand.text.primary};
  margin: 32px 0 16px;
`

const Content = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.brand.text.primary};
`

const Avatar = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.chablis};
  background-image: url('/flower.png');
  background-repeat: no-repeat;
  background-position: center center;
`

const CardLayout = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
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

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 48px;
`

const ModalBody = styled.div`
  height: calc(100% - 48px);
`

const Line = styled.span`
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 2px;
  background-color: ${props => props.theme.colors.suva_grey};
`

const TopLine = styled(Line)`
  transform: translate(-50%, -50%) rotate(45deg);
`

const BottomLine = styled(Line)`
  transform: translate(-50%, -50%) rotate(-45deg);
`

const CloseButton = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
`

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

  // move to separate hook
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <Layout mainNavigation={mainNavigation}>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalHeader>
          <CloseButton type="button" onClick={closeModal}>
            <TopLine />
            <BottomLine />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <CourseParticipationForm course={title} onDone={closeModal} />
        </ModalBody>
      </Modal>
      <Helmet title={`${title} | ${config.siteTitle}`} />
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
            <StyledServiceMeta
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
                <Typography bottomMargin>Стоимость 240 EUR</Typography>
                <Button type="button" variant="contained" onClick={openModal}>
                  Записаться на бесплатную встречу
                </Button>
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
                <Typography bottomMargin>Стоимость 240 EUR</Typography>
                <Button type="button" variant="contained" onClick={openModal}>
                  Записаться на бесплатную встречу
                </Button>
              </CourseSubscription>
              <Divider />
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12} style={emptyPaddingStyles}>
            <StyledDoulaCard
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
            <Heading>{reviewsBlockTitle}</Heading>
            <Divider />
            <Reviews>
              {content.reviews.map(({ name, description: reviewDescription }) => (
                <ReviewCard key={name} name={name} description={reviewDescription} />
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

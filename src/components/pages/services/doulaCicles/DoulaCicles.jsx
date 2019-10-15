// libs
import React from 'react'
import styled, { css, cx } from 'react-emotion'

// components
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-grid'
import { Layout } from 'components'
import { ServiceHeader } from 'components/pages/services/doulaCicles/ServiceHeader'
import { ServiceMeta } from 'components/pages/services/doulaCicles/ServiceMeta'
import { ServiceProgram } from 'components/pages/services/doulaCicles/ServiceProgram'
import { DoulaCard } from 'components/pages/services/doulaCicles/DoulaCard'
import { Button } from 'components/UI/Button'
import { Divider } from 'components/UI/Divider'

// constants
import config from '../../../../../config/website'
import theme from '../../../../../config/theme'

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
  margin-bottom: 16px;
`
const Text = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  margin: 0;
`

const hiddenStyles = css`
  display: none;
`

const formButtonStyles = css`
  flex-shrink: 0;
  margin-left: 16px;
`

const FormLayout = styled.div`
  display: flex;
  justify-content: center;
`

const FormGroup = styled.div``

const FormGroupField = styled.input`
  font-size: 12px;
  line-height: 16px;
  color: ${theme.brand.text.primary};
  padding: 8px 16px;
  border: 1px solid ${theme.colors.tide};
  border-radius: 0;
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
  margin: 0;
  max-width: 100%;
  position: relative;
  top: -64px;
`

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export const ParticipationForm = () => {
  const [formData, setFormData] = React.useState({})

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formData
      })
    })
      .then(() => console.log('success'))
      .catch(error => console.error(error))
  }

  return (
    <form
      name="participation"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <FormLayout>
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="participation" />
        <div className={hiddenStyles}>
          <label htmlFor="bot-field">
            Don’t fill this out: <input id="bot-field" name="bot-field" onChange={handleChange} />
          </label>
        </div>
        <FormGroup>
          <label htmlFor="email">
            <FormGroupField type="email" id="email" name="email" onChange={handleChange} placeholder="Email" />
          </label>
        </FormGroup>
        <Button className={formButtonStyles} variant="contained" type="submit">
          Я участвую
        </Button>
      </FormLayout>
    </form>
  )
}

const CourseFeature = styled.div`
  margin: 32px 0;

  @media (min-width: ${theme.breakpoints.xl}) {
    padding-right: 32px;
  }

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
  color: ${theme.brand.text.primary};
`

const cardStyles = css`
  @media (min-width: ${theme.breakpoints.lg}) {
    margin: 32px;
  }
`

const DoulaCicles = () => (
  <Layout>
    <Helmet title={`Доульский кружок | ${config.siteTitle}`} />
    <Container>
      <Row>
        <Col xs={12} style={emptyPaddingStyles}>
          <ServiceHeader
            title={content.title}
            place={content.place}
            description={content.shortDescription}
            imageSrc={content.mainImage}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Divider />
          <ServiceMeta
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
      <Row>
        <Col xs={12}>
          <CourseSubscription>
            <ParticipationForm />
            <Text>Стоимость курса 190 EUR, первая встреча – бесплатно</Text>
          </CourseSubscription>
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={emptyPaddingStyles}>
          <Divider />
          <Image src="/doula-circles-2.png" />
          <Divider />
        </Col>
      </Row>
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
              пространство, чтобы поделится своими переживаниями и радостями и найдете ответы. Сможете проживать
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
              психологических, творческих, трансформационных, физических - которые станут качественной базой и опорой в
              уязвимые периоды жизни.
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
              Вы уже завалены медицинской информацией, но не понимаете, как с ней быть и что выбирать – тут узнаете, как
              работать с ней самостоятельно в период подготовки к родам и после, что облегчит вам жизнь и снимет
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
      <Row>
        <Col xs={12}>
          <CourseSubscription>
            <ParticipationForm />
            <Text>Стоимость курса 190 EUR, первая встреча – бесплатно</Text>
          </CourseSubscription>
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={emptyPaddingStyles}>
          <Divider />
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
    </Container>
  </Layout>
)

export { DoulaCicles }

// import React from 'react'
// import Helmet from 'react-helmet'
// import { Header, Container, Layout } from 'components'
// import config from '../../../../config/website'

// const Services = () => (
//   <Layout>
//     <Helmet title={`Services | ${config.siteTitle}`} />
//     <Header>
//       <>
//         <h1>Services</h1>
//       </>
//     </Header>
//     <Container type="text">
//       <h2>Hi!</h2>
//       <p>
//         Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
//         texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A
//         small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
//         paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing
//         has no control Services the blind texts it is an almost unorthographic life One day however a small line of
//         blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her
//         not to do so, because there were thousands.
//       </p>
//     </Container>
//   </Layout>
// )

// export default Services

// libs
import React from 'react'
import styled, { css, cx } from 'react-emotion'

// components
import Helmet from 'react-helmet'
import { Container, Row, Col } from 'react-grid'
import { Layout } from 'components'
import { PromoImage } from 'components/PromoImage'
import { SocialMedia } from 'components/SocialMedia'
import { LocationIcon } from 'components/UI/Icons/LocationIcon'
import { GiftIcon } from 'components/UI/Icons/GiftIcon'
import { CalendarIcon } from 'components/UI/Icons/CalendarIcon'
import { Button } from 'components/UI/Button'

// constants
import config from '../../../../../config/website'
import theme from '../../../../../config/theme'

const CourseHeader = styled.div`
  position: relative;
`

const CourseHeaderContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 54px;

  @media (min-width: ${theme.breakpoints.md}) {
    padding-top: 114px;
  }
`

const CourseHeaderPlace = styled.div`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  text-align: center;
`

const CourseHeaderTitle = styled.h1`
  color: ${theme.colors.white};
  text-align: center;
  font-size: 60px;
  line-height: 64px;
  font-weight: 400;
  margin: 16px 0;
`

const CourseHeaderDescription = styled.div`
  color: ${theme.colors.white};
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  width: 300px;
  margin: 0 auto;
`

const emptyPaddingStyles = {
  padding: '0'
}

const CourseDescription = styled.div`
  padding: 80px 0;
  text-align: center;
`

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

const CourseInfoList = styled.div`
  padding: 32px 0;
  display: flex;
  justify-content: space-around;
`

const CourseInfo = styled.div`
  min-width: 200px;
  padding: 0 16px;
`

const CourseInfoText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  text-transform: uppercase;
  padding-top: 8px;
`

const hiddenStyles = css`
  display: none;
`

const buttonLeftMargin = css`
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

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export const ParticipationForm = () => {
  const [formData, setFormData] = React.useState({})

  const handleChange = e => {
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('state', formData)
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
        <Button className={buttonLeftMargin} type="submit">
          Я участвую
        </Button>
      </FormLayout>
    </form>
  )
}

const DoulaCicles = () => (
  <Layout>
    <Helmet title={`Доульский кружок | ${config.siteTitle}`} />
    <Container>
      <Row>
        <Col xs={12} style={emptyPaddingStyles}>
          <CourseHeader>
            <PromoImage src="/doula-circles.png" />
            <CourseHeaderContent>
              <CourseHeaderPlace>Лимассол. Кипр</CourseHeaderPlace>
              <CourseHeaderTitle>Доульский кружок</CourseHeaderTitle>
              <CourseHeaderDescription>Старт 27 октября 2019. Первая встреча бесплатно.</CourseHeaderDescription>
            </CourseHeaderContent>
          </CourseHeader>
          <CourseDescription>
            <Heading>Что вас ждёт?</Heading>
            <Text>
              Группа для беременных. 8 встреч, по 2.5 часа, каждое воскресенье. Плюс предварительная встреча-знакомство
              бесплатно.
            </Text>
            <CourseInfoList>
              <CourseInfo>
                <CalendarIcon />
                <CourseInfoText>8 недель</CourseInfoText>
              </CourseInfo>
              <CourseInfo>
                <LocationIcon />
                <CourseInfoText>Лимассол, Кипр</CourseInfoText>
              </CourseInfo>
              <CourseInfo>
                <GiftIcon />
                <CourseInfoText>Подарок от Лизы</CourseInfoText>
              </CourseInfo>
            </CourseInfoList>
          </CourseDescription>
          {/* <Heading>Программа курса</Heading> */}
          <CourseSubscription>
            <ParticipationForm />
            <Text>Стоимость курса 190 EUR, первая встреча – бесплатно</Text>
          </CourseSubscription>
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

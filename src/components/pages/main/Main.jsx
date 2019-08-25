// libs
import React from 'react'
import styled, { css, cx } from 'react-emotion'

// components
import { Container, Row, Col } from 'react-grid'
import { Layout } from 'components'
import { PromoImage } from 'components/PromoImage'
import { SocialMedia } from 'components/SocialMedia'

// constants
import theme from '../../../../config/theme'

const Image = styled.img`
  display: block;
  margin: 0 auto;
  object-fit: contain;
`

const widgetCol = css`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 41px;
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

const rightPadding = css`
  @media (min-width: ${theme.breakpoints.lg}) {
    padding-right: 41px;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding-right: 97px;
  }
`

const AboutMeHeading = styled.h2`
  font-size: 56px;
  font-weight: 400;
  line-height: 76px;
  color: ${theme.brand.text.primary};
  background: no-repeat url('/brush-3.png');
  background-position: 50%;
  position: relative;
  text-align: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    text-align: left;
  }

  &:before {
    content: '';
    display: block;
    width: 12px;
    height: 37px;
    background: no-repeat url('/key.png');
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;

    @media (min-width: ${theme.breakpoints.lg}) {
      left: -42px;
    }

    @media (min-width: ${theme.breakpoints.xl}) {
      left: -70px;
    }
  }
`

const AboutMeText = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};

  &:last-of-type {
    margin: 0;
  }
`

const aboutMeStyles = css`
  padding-top: 32px;
  padding-bottom: 32px;

  @media (min-width: ${theme.breakpoints.lg}) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const socialMediaStyles = css`
  @media (min-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
    position: absolute;
    top: 50%;
    right: 21px;
    transform: translateY(-50%);
  }
  @media (min-width: ${theme.breakpoints.xl}) {
    right: 31px;
  }
`

const emptyPaddingStyles = {
  padding: '0'
}

const AboutMe = () => (
  <Container className={aboutMeStyles}>
    <Row>
      <Col xs={12} lg={6}>
        <div className={cx(widgetCol, leftPadding)}>
          <AboutMeHeading>Обо мне</AboutMeHeading>
          <AboutMeText>
            Меня зовут Лиза Шефер. Я — мама 4 детей, доула, инструктор по подготовке к родам, специалист по
            послеродовому восстановлению женщин. 9 лет в деле.
          </AboutMeText>
          <AboutMeText>
            Моя профессия — быть феей материнства, чтобы вы могли чувствовать себя уверенно и спокойно в новой роли. Я
            делаю все, чтобы ваш опыт был максимально кайфовым, не легким и безоблачным, а понятным и по силам вам.
          </AboutMeText>
        </div>
      </Col>
      <Col xs={12} lg={6} style={emptyPaddingStyles}>
        <div className={cx(widgetCol, rightPadding)}>
          <SocialMedia className={socialMediaStyles} />
          <Image src="/me-with-children.png" alt="Доула" width={372} height={372} />
        </div>
      </Col>
    </Row>
  </Container>
)

const Main = () => (
  <Layout>
    <Container>
      <Row>
        <Col style={emptyPaddingStyles} xs={12}>
          <PromoImage />
        </Col>
      </Row>
    </Container>
    <AboutMe />
  </Layout>
)

export { Main }

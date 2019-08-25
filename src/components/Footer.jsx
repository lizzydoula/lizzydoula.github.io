import React from 'react'
import styled from 'react-emotion'

// components
import { Container, Row, Col } from 'react-grid'
import { SocialMedia } from 'components/SocialMedia'

// constants
import theme from '../../config/theme'

const FooterLayout = styled.footer`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const FooterText = styled.p`
  order: 1;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.brand.text.primary};
  margin: 0;
  text-align: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    order: 0;
    margin: 0 32px 0 0;
  }
`

const Footer = () => (
  <Container>
    <Row>
      <Col>
        <FooterLayout>
          <FooterText>Copyright &copy; 2018 doulalizzy.com. All rights reserved.</FooterText>
          <SocialMedia />
        </FooterLayout>
      </Col>
    </Row>
  </Container>
)

export default Footer

import React from 'react'
import styled from 'react-emotion'

// components
import { Container, Row, Col } from 'react-grid'
import { SocialMedia } from 'components/SocialMedia'

// constants
import { theme } from '../../config/theme'

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

const Footer = () => (
  <Container>
    <Row>
      <Col>
        <FooterLayout>
          <SocialMedia />
        </FooterLayout>
      </Col>
    </Row>
  </Container>
)

export { Footer }

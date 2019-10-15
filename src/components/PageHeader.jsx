// libs
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

// components
import { Container, Row, Col } from 'react-grid'
import { HorizontalLogo } from './UI/HorizontalLogo'

const Header = styled.header`
  position: sticky;
  top: 0;
  height: 68px;
  background: ${props => props.theme.colors.wild_sand};
  display: flex;
  align-items: center;
  z-index: 1;
`

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
`

const logoLinkStyles = css`
  box-sizing: content-box;
  height: 14px;
  padding: 8px 4px;
  display: inline-flex;
`

const circlesLinkStyles = css`
  margin-left: auto;
  text-decoration: none;
`

const Text = styled.div`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
`

const PageHeader = () => (
  <Header>
    <Container>
      <Row>
        <Col xs={12}>
          <HeaderLayout>
            <Link className={logoLinkStyles} to="/">
              <HorizontalLogo />
            </Link>
            <Link className={circlesLinkStyles} to="/services/pregnancy/doula-circles">
              <Text>Доульский кружок</Text>
            </Link>
          </HeaderLayout>
        </Col>
      </Row>
    </Container>
  </Header>
)

export { PageHeader }

// libs
import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

// components
import { Container, Row, Col } from 'react-grid'
import { Button } from './UI/Button'
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
  padding: 0 32px;
`

const logoLinkStyles = css`
  box-sizing: content-box;
  height: 14px;
  padding: 8px 4px;
  display: inline-flex;
`

const bookLinkStyles = css`
  margin-left: auto;
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
            <Button
              className={bookLinkStyles}
              href="https://doulalizzy.simplybook.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              Записаться
            </Button>
          </HeaderLayout>
        </Col>
      </Row>
    </Container>
  </Header>
)

export { PageHeader }

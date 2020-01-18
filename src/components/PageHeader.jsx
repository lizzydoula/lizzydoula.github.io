// libs
import React from 'react'
import { Link } from 'gatsby'
import styled, { css, cx } from 'react-emotion'

// components
import { Container, Row, Col } from 'react-grid'
import { HorizontalLogo } from './UI/HorizontalLogo'
import { HamburgerMenuButton } from './UI/HamburgerMenuButton'

const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  height: 68px;
  max-height: none;
  width: 100%;
  z-index: 1;
  // background: transparent;
  background: white;
  // transition: background 0.3s cubic-bezier(0.52, 0.16, 0.24, 1), height 0.3s 0.1s linear;
  transition: height 0.2s linear;

  &.isMobileMenuOpen {
    // transition: background 0.3s cubic-bezier(0.52, 0.16, 0.24, 1);
    transition: height 0.2s linear;
    height: 100%;
  }
`

const Navigation = styled.div`
  height: 68px;
  width: 100%;
  background: ${props => props.theme.colors.wild_sand};
  display: flex;
  align-items: center;
`

const Header = styled.div`
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

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <NavigationWrapper className={cx({ isMobileMenuOpen: isMenuOpen })}>
      <Navigation>
        <Container>
          <Row>
            <Col xs={12}>
              <Header>
                <Link className={logoLinkStyles} to="/">
                  <HorizontalLogo />
                </Link>
                <Link className={circlesLinkStyles} to="/services/pregnancy/doula-circles">
                  <Text>Доульский кружок</Text>
                </Link>
                <HamburgerMenuButton expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
              </Header>
            </Col>
          </Row>
        </Container>
      </Navigation>
    </NavigationWrapper>
  )
}

export { PageHeader }

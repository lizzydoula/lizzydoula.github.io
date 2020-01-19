// libs
import React from 'react'
import { Link } from 'gatsby'
import styled, { css, cx } from 'react-emotion'

// components
import { Container, Row, Col } from 'react-grid'
import { HorizontalLogo } from './UI/HorizontalLogo'
import { MainNavigation } from './MainNavigation'
import { HamburgerMenuButton } from './UI/HamburgerMenuButton'

// constants
import { theme } from '../../config/theme'

const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  height: 68px;
  max-height: none;
  width: 100%;
  z-index: 1;
  overflow-y: hidden;
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
  margin-left: 8px;
`

const menuButton = css`
  margin-left: auto;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`

const DesktopNavigation = styled(MainNavigation)`
  margin-left: auto;
  display: none;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
`

const PageHeader = ({ navigation }) => {
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
                <DesktopNavigation items={navigation} />
                <HamburgerMenuButton
                  className={menuButton}
                  expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
              </Header>
            </Col>
          </Row>
        </Container>
      </Navigation>
      <Container>
        <Row>
          <Col xs={12}>
            <MainNavigation mobile items={navigation} />
          </Col>
        </Row>
      </Container>
    </NavigationWrapper>
  )
}

export { PageHeader }

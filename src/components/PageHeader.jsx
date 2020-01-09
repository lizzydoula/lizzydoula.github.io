// libs
import React from 'react'
import { Link } from 'gatsby'
import styled, { css, keyframes, cx } from 'react-emotion'

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

const burgerLineWidth = 18
const burgerLineHeight = 2
const animationDuration = 0.3

const hamburger = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
`

const topLineAnimationExpanded = keyframes`
  0% {
      transform: translateY(-3px) rotate(0);
  }
  50% {
      transform: translateY(2px) rotate(0);
  }
  100% {
      transform: translateY(2px) rotate(-45deg);
  }
`

const topLineAnimation = keyframes`
  0% {
    transform: translateY(2px) rotate(-45deg);
  }
  50% {
    transform: translateY(2px) rotate(0);
  }
  100% {
      transform: translateY(-3px) rotate(0);
  }
`

const HamburgerTopLine = styled.span`
  display: block;
  position: relative;
  width: ${burgerLineWidth}px;
  height: ${burgerLineHeight}px;
  background-color: ${props => props.theme.colors.suva_grey};
  animation: ${topLineAnimation} ${animationDuration}s forwards cubic-bezier(0.04, 0.04, 0.12, 0.96);

  &.hamburgerExpanded {
    animation: ${topLineAnimationExpanded} ${animationDuration}s forwards cubic-bezier(0.04, 0.04, 0.12, 0.96);
  }
`

const HamburgerMiddleLine = styled.span`
  display: block;
  width: ${burgerLineWidth}px;
  height: ${burgerLineHeight}px;
  background-color: ${props => props.theme.colors.suva_grey};
  opacity: 1;
  transition: opacity 0.15s 0.15s;

  &.hamburgerExpanded {
    transition: opacity 0.15s;
    opacity: 0;
  }
`

const bootomLineAnimation = keyframes`
  0% {
    transform: translateY(-2px) rotate(45deg);
  }
  50% {
    transform: translateY(-2px) rotate(0);
  }
  100% {
    transform: translateY(3px) rotate(0);
  }
`

const bootomLineAnimationExpanded = keyframes`
  0% {
    transform: translateY(3px) rotate(0);
  }
  50% {
    transform: translateY(-2px) rotate(0);
  }
  100% {
      transform: translateY(-2px) rotate(45deg);
    }
`

const HamburgerBottomLine = styled.span`
  display: block;
  width: ${burgerLineWidth}px;
  height: ${burgerLineHeight}px;
  background-color: ${props => props.theme.colors.suva_grey};
  animation: ${bootomLineAnimation} ${animationDuration}s forwards cubic-bezier(0.04, 0.04, 0.12, 0.96);

  &.hamburgerExpanded {
    animation: ${bootomLineAnimationExpanded} ${animationDuration}s forwards cubic-bezier(0.04, 0.04, 0.12, 0.96);
  }
`

const HamburgerMenuButton = ({ expanded, onClick }) => (
  <button
    className={hamburger}
    onClick={onClick}
    type="button"
    aria-label="Menu"
    aria-controls="navigation"
    aria-expanded={expanded}
  >
    <HamburgerTopLine className={cx({ hamburgerExpanded: expanded })} />
    <HamburgerMiddleLine className={cx({ hamburgerExpanded: expanded })} />
    <HamburgerBottomLine className={cx({ hamburgerExpanded: expanded })} />
  </button>
)

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
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
              {/* <HamburgerMenuButton expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} /> */}
            </HeaderLayout>
          </Col>
        </Row>
      </Container>
    </Header>
  )
}

export { PageHeader }

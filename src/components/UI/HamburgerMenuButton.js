import React from 'react'
import styled, { cx, css, keyframes } from 'react-emotion'
import { useSpring, animated, interpolate } from 'react-spring'

// constants
import { theme } from '../../../config/theme'

const burgerLineWidth = 18
const burgerLineHeight = 2

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
  outline: none;
`

const HamburgerTopLine = styled(animated.span)`
  display: block;
  position: relative;
  top: -3px;
  width: ${burgerLineWidth}px;
  height: ${burgerLineHeight}px;
  background-color: ${props => props.theme.colors.suva_grey};
`

const HamburgerMiddleLine = styled(animated.span)`
  display: block;
  width: ${burgerLineWidth}px;
  height: ${burgerLineHeight}px;
  background-color: ${props => props.theme.colors.suva_grey};
`

const HamburgerBottomLine = styled(animated.span)`
  display: block;
  position: relative;
  top: 3px;
  width: ${burgerLineWidth}px;
  height: ${burgerLineHeight}px;
  background-color: ${props => props.theme.colors.suva_grey};
`

const HamburgerMenuButton = ({ expanded, onClick }) => {
  const expandedAnimation = useSpring({
    from: { value: 0 },
    to: { value: expanded ? 1 : 0 }
  })

  return (
    <button
      className={hamburger}
      onClick={onClick}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      aria-expanded={expanded}
    >
      <HamburgerTopLine
        style={{
          transform: interpolate(
            [
              expandedAnimation.value.interpolate({
                range: [0, 0.5, 1],
                output: [0, 5, 5]
              }),
              expandedAnimation.value.interpolate({
                range: [0, 0.5, 1],
                output: [0, 0, 45]
              })
            ],
            (x, y) => {
              return `translateY(${x}px) rotate(${y}deg)`
            }
          )
        }}
      />
      <HamburgerMiddleLine style={{ opacity: expandedAnimation.value.interpolate([0, 0.5, 1], [1, 0, 0]) }} />
      <HamburgerBottomLine
        style={{
          transform: interpolate(
            [
              expandedAnimation.value.interpolate({
                range: [0, 0.5, 1],
                output: [0, 5, 5]
              }),
              expandedAnimation.value.interpolate({
                range: [0, 0.5, 1],
                output: [0, 0, 45]
              })
            ],
            (x, y) => {
              return `translateY(${-x}px) rotate(${-y}deg)`
            }
          )
        }}
      />
    </button>
  )
}

export { HamburgerMenuButton }

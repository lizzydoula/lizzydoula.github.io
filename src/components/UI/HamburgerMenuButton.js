import React from 'react'
import styled, { cx, css } from 'react-emotion'
import { useSpring, animated, interpolate } from 'react-spring'

const burgerLineWidth = 18
const burgerLineHeight = 2

const hamburger = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
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

const HamburgerMenuButton = ({ className, expanded, onClick }) => {
  const expandedAnimation = useSpring({
    from: { value: 0 },
    to: { value: expanded ? 1 : 0 }
  })

  return (
    <button
      className={cx(hamburger, className)}
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
            (y, angle) => `translateY(${y}px) rotate(${angle}deg)`
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
            (y, angle) => `translateY(${-y}px) rotate(${-angle}deg)`
          )
        }}
      />
    </button>
  )
}

export { HamburgerMenuButton }

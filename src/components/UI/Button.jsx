import React from 'react'
import styled, { cx, css } from 'react-emotion'

// constants
import theme from '../../../config/theme'

const basicStyles = css`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  box-sizing: border-box;
  cursor: pointer;
`

const outlinedStyles = css`
  padding: 7px 12px;
  border-width: 1px;
  border-style: solid;
`

const linkStyles = css`
  text-decoration: none;
`

const Button = ({
  className,
  variant = 'outlined',
  color = 'default',
  href = '',
  children = null,
  target = '',
  type
}) => {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      css={css`
        color: ${theme.brand.text[color]};
        border-color: ${theme.brand[color]};
      `}
      className={cx(className, basicStyles, {
        [outlinedStyles]: variant === 'outlined',
        [linkStyles]: href.length !== 0
      })}
      href={href}
      target={target}
      type={type}
    >
      {children}
    </Component>
  )
}

export { Button }
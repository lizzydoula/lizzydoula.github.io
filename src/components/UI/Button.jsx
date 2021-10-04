import React from 'react'
import styled, { cx, css } from 'react-emotion'

// constants
import { theme } from '../../../config/theme'

const basicStyles = css`
  text-decoration: none;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 11px 16px;
  letter-spacing: 0.5px;
`

const outlinedStyles = css`
  border-width: 1px;
  border-style: solid;
`

const containedStyles = css`
  border: none;
  color: ${theme.colors.white};
  background-color: ${theme.colors.just_right};
`

const linkStyles = css`
  text-decoration: none;
`

const fullWidthStyles = css`
  width: 100%;
`

const Button = ({
  className,
  variant = 'outlined',
  color = 'default',
  href = undefined,
  fullwidth = false,
  ...other
}) => {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      css={css`
        color: ${theme.brand.text[color]};
        border-color: ${theme.brand[color]};
      `}
      className={cx(className, basicStyles, {
        [containedStyles]: variant === 'contained',
        [outlinedStyles]: variant === 'outlined',
        [linkStyles]: href && href.length !== 0,
        [fullWidthStyles]: fullwidth
      })}
      href={href}
      {...other}
    />
  )
}

export { Button }

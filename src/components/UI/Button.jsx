import React from 'react'
import styled, { cx, css } from 'react-emotion'

// constants
import theme from '../../../config/theme'

const basicStyles = css`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 9px;
  line-height: 16px;
  text-transform: uppercase;
  box-sizing: border-box;
`

const outlinedStyles = css`
  padding: 9px 24px;
  border-width: 1px;
  border-style: solid;
`

const linkStyles = css`
  text-decoration: none;
`

const Button = ({ className, variant = 'outlined', color = 'default', href = '', children = null, target = '' }) => {
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
    >
      {children}
    </Component>
  )
}

export { Button }

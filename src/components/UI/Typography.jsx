import React from 'react'
import styled, { cx, css } from 'react-emotion'
import { withTheme } from 'emotion-theming'

// constants
import { theme } from '../../../config/theme'

const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caps: 'p'
}

const bottomMarginStyles = css`
  margin: 0 0 24px 0;
`

const defaultVariantStyles = {
  body1: css`
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
  `,
  body2: css`
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 0;
  `,
  caps: css`
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  `,
  h1: css`
    font-size: 60px;
    line-height: 64px;
    font-weight: 400;
    margin-bottom: 0;
  `,
  h2: css`
    font-size: 40px;
    line-height: 44px;
    font-weight: 400;
    margin-bottom: 0;
  `,
  h3: css`
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    margin-bottom: 0;
  `,
  h5: css`
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 0;
  `
}

const Component = ({
  className,
  color = 'primary',
  variant = 'body1',
  component = null,
  bottomMargin = false,
  children = null,
  theme: currentTheme
}) => {
  const textColor = color === 'inherit' ? 'inherit' : currentTheme.brand.text[color]
  const Tag = component || defaultVariantMapping[variant]

  return (
    <Tag
      css={{ color: textColor }}
      className={cx(defaultVariantStyles[variant], className, { [bottomMarginStyles]: bottomMargin })}
    >
      {children}
    </Tag>
  )
}

export const Typography = withTheme(Component)

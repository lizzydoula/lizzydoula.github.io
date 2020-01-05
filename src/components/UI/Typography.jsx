import React from 'react'
import styled, { cx, css } from 'react-emotion'

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
  caps: 'p'
}

const bottomMarginStyles = css`
  margin: 0 0 24px 0;
`

const defaultVariantStyles = {
  body1: css`
    font-size: 14px;
    line-height: 24px;
    color: ${theme.brand.text.primary};
    margin-bottom: 0;
  `,
  caps: css`
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: ${theme.brand.text.primary};
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
  `,
  h1: css`
    font-size: 60px;
    line-height: 64px;
    font-weight: 400;
    color: ${theme.brand.text.primary};
    margin-bottom: 0;
  `,
  h2: css`
    font-size: 40px;
    line-height: 44px;
    font-weight: 400;
    color: ${theme.brand.text.primary};
    margin-bottom: 0;
  `,
  h3: css`
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
    color: ${theme.brand.text.primary};
    margin-bottom: 0;
  `,
  h5: css`
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${theme.brand.text.primary};
    margin-bottom: 0;
  `
}

const Typography = ({ className, variant = 'body1', component = null, bottomMargin = false, children = null }) => {
  const Component = component || defaultVariantMapping[variant]

  return (
    <Component className={cx(defaultVariantStyles[variant], className, { [bottomMarginStyles]: bottomMargin })}>
      {children}
    </Component>
  )
}

export { Typography }

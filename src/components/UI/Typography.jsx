import React from 'react'
import styled, { cx, css } from 'react-emotion'

// constants
import { theme } from '../../../config/theme'

const defaultVariantMapping = {
  // h1: 'h1',
  h2: 'h2',
  // h3: 'h3',
  // h4: 'h4',
  // h5: 'h5',
  // h6: 'h6',
  body1: 'p'
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
  h1: css`
    font-size: 60px;
    font-weight: 400;
    line-height: 64px;
    color: ${theme.brand.text.primary};
    margin-bottom: 0;
  `,
  h2: css`
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
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

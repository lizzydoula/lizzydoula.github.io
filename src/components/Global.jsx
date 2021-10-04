// libs
import React from 'react'
import { injectGlobal } from 'react-emotion'

// components
import { withTheme } from 'emotion-theming'

const GlobalStylesComponent = ({ theme, children }) => {
  // eslint-disable-next-line no-unused-expressions
  injectGlobal`
    html {
      overflow: visible;
    }

    button {
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      -webkit-tap-highlight-color: transparent;
      background-color: transparent;
      border: 0;
      margin: 0;
      box-sizing: border-box;
      padding: 0;
      cursor: pointer;
      user-select: none;
      vertical-align: middle;
      -moz-appearance: none;
      -webkit-appearance: none;
      text-decoration: none;
      color: inherit;
    
      &::-moz-focus-inner {
        border-style: none;
      }
    
      &:disabled {
        cursor: default;
        pointer-events: none;
      }
    }

    .ReactModal__Body--open {
      overflow: hidden;
    }

    .ReactModal__Overlay {
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ReactModal__Content {
      position: static !important;
      border-radius: 0 !important;
      padding: 0 !important;
      width: 100%;
      height: 100%;
    }

    @media (min-width: ${theme.breakpoints.sm}) {
      .ReactModal__Content {
        width: 320px;
        height: auto;
      }
    }
  `

  return <>{children}</>
}

export const Global = withTheme(GlobalStylesComponent)

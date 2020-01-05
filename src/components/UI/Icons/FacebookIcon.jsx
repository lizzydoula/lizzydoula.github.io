import React from 'react'
import { theme } from '../../../../config/theme'

const FacebookIcon = ({ color = theme.colors.almond_frost, width = '20', height = '20' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20">
    <path
      fill={color}
      fillRule="nonzero"
      d="M9.92 0C4.44 0 0 4.44 0 9.92c0 5.48 4.44 9.92 9.92 9.92 5.48 0 9.92-4.44 9.92-9.92C19.88 4.44 15.4 0 9.92 0zm2.48 10.28h-1.6v5.76H8.4v-5.76H7.28V8.24H8.4V6.92c0-.96.44-2.4 2.4-2.4h1.76v1.96h-1.28c-.2 0-.48.12-.48.56v1.2h1.84l-.24 2.04z"
    />
  </svg>
)

export { FacebookIcon }

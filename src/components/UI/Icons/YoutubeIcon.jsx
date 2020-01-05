import React from 'react'
import { theme } from '../../../../config/theme'

const YoutubeIcon = ({ color = theme.colors.almond_frost, width = '20', height = '20' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20">
    <g fill="none" fillRule="evenodd">
      <circle cx="10" cy="10" r="10" fill={color} />
      <path fill="#FFF" d="M15 10l-8 4V6z" />
    </g>
  </svg>
)

export { YoutubeIcon }

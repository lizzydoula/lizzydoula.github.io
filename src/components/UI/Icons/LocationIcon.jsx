import React from 'react'
import { theme } from '../../../../config/theme'

const LocationIcon = ({ color = theme.colors.almond_frost, width = '24', height = '24' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={color} width={width} height={height} viewBox="0 0 32 32">
    <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
  </svg>
)

export { LocationIcon }

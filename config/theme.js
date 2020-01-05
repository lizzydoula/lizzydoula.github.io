import { darken } from 'polished'

// color palette
const colors = {
  wild_sand: '#EEEBEA',
  ebb: '#E7D7D4',
  chablis: '#FDE9E1',
  almond_frost: '#A58580',
  suva_grey: '#8A8080',
  shady_lady: '#979797',
  black: '#000000',
  white: '#FFFFFF',
  tide: '#C4B8B0',
  just_right: '#DFBFB0',

  /**
   * LEGACY colors
   * TO DO: remove
   */
  grey: '#25252',
  bg_color: '#f3f3f3',
  body_color: '#222',
  link_color: '#cbafa9',
  link_color_hover: `${darken(0.15, '#cbafa9')}`
}

const brand = {
  default: colors.shady_lady,

  text: {
    default: colors.black,
    primary: colors.almond_frost
  },

  // LEGACY colors
  primary: '#cbafa9',
  secondary: '#8a8080'
}

export const overlay = ['#f76262', '#216583', '#65c0ba', '#35477d', '#6c5b7b', '#203541', '#9951ff', '#480032']

export const breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 }

export const theme = {
  brand,
  colors,
  breakpoints: {
    xs: `${breakpoints.xs}px`,
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`
  }
}

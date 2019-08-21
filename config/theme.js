import { darken } from 'polished'

const brand = {
  // LEGACY colors
  primary: '#cbafa9',
  secondary: '#8a8080'
}

// color palette
const colors = {
  wild_sand: '#EEEBEA',
  ebb: '#E7D7D4',
  chablis: '#FDE9E1',
  almond_frost: '#A58580',
  suva_grey: '#8A8080',
  black: '#000000',

  /**
   * LEGACY colors
   * TO DO: remove
   */
  grey: '#25252',
  bg_color: '#f3f3f3',
  body_color: '#222',
  link_color: brand.primary,
  link_color_hover: `${darken(0.15, brand.primary)}`
}

export const overlay = ['#f76262', '#216583', '#65c0ba', '#35477d', '#6c5b7b', '#203541', '#9951ff', '#480032']

const theme = {
  brand,
  colors,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1400px'
  },
  container: {
    base: '100rem',
    text: '55rem'
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem'
  }
}

export default theme

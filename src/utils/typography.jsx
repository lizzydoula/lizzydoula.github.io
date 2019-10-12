import Typography from 'typography'

const config = require('../../config/website')

const typography = new Typography({
  title: 'Emma',
  baseFontSize: config.baseFontSize,
  baseLineHeight: 1.5,
  headerFontFamily: [config.headerFontFamily, 'sans-serif'],
  bodyFontFamily: [config.bodyFontFamily, 'sans-serif'],
  scaleRatio: 2.5,
  headerWeight: 400,
  googleFonts: [
    {
      name: config.headerFontFamily,
      styles: ['400']
    },
    {
      name: config.bodyFontFamily,
      styles: ['400', '700']
    }
  ]
})

export default typography

// libs
import React from 'react'
import { Container as ReactContainer, Row as ReactRow, Col as ReactCol } from 'react-grid'

// constants
import { breakpoints } from '../../../config/theme'

const emptyPaddingStyles = {
  padding: '0'
}

const styles = {
  breakpoints: { ...breakpoints },
  containerMaxWidths: { sm: 540, md: 720, lg: 960, xl: 1140 },
  columns: 12,
  gutterWidth: 32
}

export const Container = props => {
  const { noPadding, ...otherProps } = props

  if (noPadding) {
    return <ReactContainer style={emptyPaddingStyles} {...otherProps} styles={styles} />
  }

  return <ReactContainer {...otherProps} styles={styles} />
}
export const Row = props => <ReactRow {...props} styles={styles} />
export const Col = props => <ReactCol {...props} styles={styles} />

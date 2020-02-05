// libs
import React from 'react'
import R from 'ramda'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// components
import { Typography } from 'components/UI/Typography'

const Bold = ({ children }) => <p className="bold">{children}</p>

const defaultOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => (
      <Typography variant="h2" bottomMargin>
        {children}
      </Typography>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography variant="body1" bottomMargin>
        {children}
      </Typography>
    )
  }
}

export const renderDocument = (document, options) =>
  documentToReactComponents(document, R.mergeRight(defaultOptions, options))

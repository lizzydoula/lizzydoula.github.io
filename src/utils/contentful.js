// libs
import React from 'react'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// components
import { Typography } from 'components/UI/Typography'

const Bold = ({ children }) => <p className="bold">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography variant="body1" bottomMargin>
        {children}
      </Typography>
    )
  },
  renderText: text => text.replace('!', '?')
}

export const renderDocument = document => documentToReactComponents(document, options)

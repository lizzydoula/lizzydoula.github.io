// libs
import React from 'react'
import styled from 'react-emotion'
import { renderDocument } from 'utils/contentful'
import { BLOCKS } from '@contentful/rich-text-types'

// components
import { Typography } from 'components/UI/Typography'
import { Divider } from 'components/UI/Divider'

// constants
import { theme } from '../../../../../config/theme'

const Section = styled.section`
  position: relative;
`

const PrerequisitesTitle = styled(Typography)`
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  padding: 0 16px;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 44px;
  }
`

const PrerequisitesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
`

const PrerequisitesListItem = styled.li`
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  margin: 0 0 32px 0;

  @media (min-width: ${theme.breakpoints.lg}) {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 64px;
    margin: 0 0 16px 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const renderDocumentOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <PrerequisitesTitle variant="h2">{children}</PrerequisitesTitle>,
    [BLOCKS.PARAGRAPH]: (node, children) => <Typography variant="body1">{children}</Typography>
  }
}

const CoursePrerequisites = ({ className, content }) => {
  const [title, ...prerequisitesList] = content

  return (
    <Section className={className}>
      {renderDocument(title, renderDocumentOptions)}
      <Divider />
      <PrerequisitesList>
        {prerequisitesList.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <PrerequisitesListItem key={index}>{renderDocument(item, renderDocumentOptions)}</PrerequisitesListItem>
        ))}
      </PrerequisitesList>
    </Section>
  )
}

export { CoursePrerequisites }

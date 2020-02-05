// libs
import React from 'react'
import styled, { cx, css } from 'react-emotion'
import { renderDocument } from 'utils/contentful'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

// components
import { Typography } from 'components/UI/Typography'
import { Divider } from 'components/UI/Divider'
import { BranchIcon } from 'components/UI/Icons/BranchIcon'

// constants
import { theme } from '../../../../../config/theme'

const Section = styled.section`
  position: relative;
`

const ProgramTitle = styled(Typography)`
  font-size: 32px;
  line-height: 40px;
  text-align: center;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 44px;
  }
`

const ProgramList = styled.ul`
  margin: 0 auto;
  list-style-type: none;
  max-width: 600px;
`

const ProgramListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
`

const ProgramListItemContent = styled(Typography)`
  padding: 36px 0;

  li & {
    border-bottom: 1px solid ${props => props.theme.colors.just_right};
  }

  li:last-child & {
    border: none;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 48px 12px;
  }
`

const ProgramListItemIndex = styled.span`
  flex-shrink: 0;
  width: 80px;
  padding-top: 8px;
  font-size: 88px;
  line-height: 96px;
  font-family: 'Prata', sans-serif;
  color: ${props => props.theme.colors.just_right};

  @media (min-width: ${theme.breakpoints.md}) {
    padding-top: 12px;
    width: 120px;
  }
`

const LeftDecoration = styled(BranchIcon)`
  display: none;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: ${theme.breakpoints.lg}) {
    opacity: 0.2;
    fill: ${props => props.theme.colors.shady_lady};
    display: block;
  }
`

const renderDocumentOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <ProgramTitle variant="h2">{children}</ProgramTitle>,
    [BLOCKS.PARAGRAPH]: (node, children) => <ProgramListItemContent variant="body1">{children}</ProgramListItemContent>
  }
}

const CourseProgram = ({ className, content }) => {
  const [title, ...programList] = content

  return (
    <Section className={className}>
      {renderDocument(title, renderDocumentOptions)}
      <Divider height={48} />
      <ProgramList>
        {programList.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ProgramListItem key={index}>
            <ProgramListItemIndex>{index + 1}</ProgramListItemIndex>
            {renderDocument(item, renderDocumentOptions)}
          </ProgramListItem>
        ))}
      </ProgramList>
      <LeftDecoration />
    </Section>
  )
}

export { CourseProgram }

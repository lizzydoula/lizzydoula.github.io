// libs
import React from 'react'
import styled from 'react-emotion'
import { renderDocument } from 'utils/contentful'
import { BLOCKS } from '@contentful/rich-text-types'
import R from 'ramda'

// components
import { Typography } from 'components/UI/Typography'
import { Divider } from 'components/UI/Divider'
import { FaRegCalendarAlt, FaRegCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'

// constants
import { theme } from '../../../../../config/theme'

const Section = styled.section`
  position: relative;
`

const DescriptionTitle = styled(Typography)`
  font-size: 32px;
  line-height: 40px;
  text-align: center;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 40px;
    line-height: 44px;
  }
`

const DescriptionContentLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.lg}) {
    justify-content: flex-start;
    flex-direction: row;
  }
`

const DescriptionContent = styled.div`
  @media (min-width: ${theme.breakpoints.lg}) {
    width: 50%;
  }
`

const DescriptionFeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 32px 0 0;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    width: 50%;
    margin-top: 0;
    justify-content: space-evenly;
  }
`

const DescriptionFeaturesListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  flex-basis: 33.33%;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding-top: 0;
  }
`

const Icon = ({ className, type }) => {
  if (type === 'Calendar') {
    return <FaRegCalendarAlt className={className} />
  }

  if (type === 'Location') {
    return <FaMapMarkerAlt className={className} />
  }

  return <FaRegCheckCircle className={className} />
}

const FeatureIcon = styled(Icon)`
  width: 24px;
  height: 24px;
  color: ${theme.brand.text.primary};
  margin-bottom: 16px;
`

const renderDocumentOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <DescriptionTitle variant="h2">{children}</DescriptionTitle>,
    [BLOCKS.PARAGRAPH]: (node, children) => <Typography variant="body1">{children}</Typography>
  }
}

const getFeatureIcon = R.compose(
  R.path(['data', 'target', 'fields', 'type', 'en-US']),
  R.find(R.propEq('nodeType', 'embedded-entry-inline'))
)

const getFeatureText = R.compose(
  R.prop('value'),
  R.find(item => item.nodeType === 'text' && item.value.length > 0)
)

const getDescriptionFeatures = features =>
  features.map(({ content }) => ({ icon: getFeatureIcon(content), text: getFeatureText(content) }))

const CourseDescription = ({ className, content }) => {
  const [title, text, ...remainingContent] = content

  const descriptionFeatures = getDescriptionFeatures(remainingContent)

  return (
    <Section className={className}>
      {renderDocument(title, renderDocumentOptions)}
      <Divider />
      <DescriptionContentLayout>
        <DescriptionContent>{renderDocument(text, renderDocumentOptions)}</DescriptionContent>
        <DescriptionFeaturesList>
          {descriptionFeatures.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DescriptionFeaturesListItem key={index}>
              <FeatureIcon type={item.icon} />
              <Typography variant="body1">{item.text}</Typography>
            </DescriptionFeaturesListItem>
          ))}
        </DescriptionFeaturesList>
      </DescriptionContentLayout>
    </Section>
  )
}

export { CourseDescription }

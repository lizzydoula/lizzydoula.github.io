// libs
import React from 'react'
import styled from 'react-emotion'
import { renderDocument } from 'utils/contentful'
import { BLOCKS } from '@contentful/rich-text-types'
import R from 'ramda'

// components
import { Typography } from 'components/UI/Typography'
import Img from 'gatsby-image'

// constants
import { theme } from '../../../../../config/theme'

const Section = styled.section`
  position: relative;
`

const FeaturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
`

const FeaturesListItem = styled.li`
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding: 0 16px;
  margin: 0 0 32px 0;

  @media (min-width: ${theme.breakpoints.lg}) {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 64px;
    margin: 0 0 64px 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const renderDocumentOptions = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => (
      <Typography variant="h3" bottomMargin>
        {children}
      </Typography>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <Typography variant="body1">{children}</Typography>
  }
}

const CourseFeatures = ({ className, content }) => {
  const featuresList = R.splitEvery(2, content)

  console.log(featuresList)

  return (
    <Section className={className}>
      <FeaturesList>
        {featuresList.map((feature, index) => {
          const imageAsset = R.find(R.propEq('nodeType', 'embedded-asset-block'))(feature)

          if (imageAsset) {
            const image = R.path(['data', 'target', 'fields', 'file', 'en-US'])(imageAsset)
            const { width } = image.details.image
            console.log('IMAGE', image)

            return (
              // eslint-disable-next-line react/no-array-index-key
              <FeaturesListItem key={index}>
                <Img
                  width={image.details.image.width}
                  fluid={{
                    aspectRatio: width / image.details.image.height,
                    src: `${image.url}?w=630&q=80`,
                    srcSet: `
                  ${image.url}?w=${width / 4}&&q=100 ${width / 4}w,
                  ${image.url}?w=${width / 2}&&q=100 ${width / 2}w,
                  ${image.url}?w=${width}&&q=100 ${width}w,
                  ${image.url}?w=${width * 1.5}&&q=100 ${width * 1.5}w,
                  ${image.url}?w=1000&&q=100 1000w,
                  `,
                    sizes: '(max-width: 630px) 100vw, 630px'
                  }}
                />
              </FeaturesListItem>
            )
          }

          const [title, description] = feature

          return (
            // eslint-disable-next-line react/no-array-index-key
            <FeaturesListItem key={index}>
              {renderDocument(title, renderDocumentOptions)}
              {renderDocument(description, renderDocumentOptions)}
            </FeaturesListItem>
          )
        })}
      </FeaturesList>
    </Section>
  )
}

export { CourseFeatures }

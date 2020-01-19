import React from 'react'
import { graphql } from 'gatsby'
import { Main } from 'components/pages/main'

const Index = ({ data }) => (
  <Main
    data={{
      mainNavigation: data.contentfulNavigationElement.navigationElements,
      pageContent: { ...data.contentfulPagesMain, bookletAsset: data.contentfulAsset }
    }}
  />
)

export const query = graphql`
  query IndexQuery {
    contentfulNavigationElement(contentful_id: { eq: "4sRun8bi76VmXA8qxdxluM" }, node_locale: { eq: "ru" }) {
      id
      navigationElements {
        title
        id
        href
      }
      title
      href
    }
    contentfulPagesMain(node_locale: { eq: "ru" }) {
      introTitle
      introText {
        json
      }
      introVideoId
      introVideoTitle
      brochureBlockTitle
      brochureTitle {
        json
      }
      brochureDescription {
        json
      }
      brochureCta
      brochurePdf {
        description
        file {
          url
          fileName
        }
      }
    }
    contentfulAsset(node_locale: { eq: "ru" }, contentful_id: { eq: "4EVF7yRj7uBkYUszwJgB7i" }) {
      file {
        url
      }
      title
    }
  }
`

export default Index

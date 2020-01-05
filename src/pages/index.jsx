import React from 'react'
import { graphql } from 'gatsby'
import { Main } from 'components/pages/main'

const Index = ({ data }) => <Main data={data.contentfulPagesMain} />

export const query = graphql`
  query IndexQuery {
    contentfulPagesMain(node_locale: { eq: "ru" }) {
      introTitle
      introText {
        json
        nodeType
      }
      introVideoId
      introVideoTitle
      brochurePdf {
        description
        file {
          url
          fileName
        }
      }
    }
  }
`

export default Index

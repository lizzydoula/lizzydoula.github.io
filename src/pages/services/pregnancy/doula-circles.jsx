// libs
import React from 'react'
import { graphql } from 'gatsby'

// component
import { DoulaCicles as Page } from 'components/pages/services/doulaCicles'

const DoulaCicles = ({ data }) => (
  <Page
    data={{
      mainNavigation: data.contentfulNavigationElement.navigationElements
    }}
  />
)

export const query = graphql`
  query DoulaCiclesQuery {
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
  }
`

export default DoulaCicles

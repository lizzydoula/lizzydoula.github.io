// libs
import React from 'react'
import { graphql } from 'gatsby'

// components
import { Layout } from 'components/Layout'

const NotFoundPage = ({ data }) => (
  <Layout mainNavigation={data.contentfulNavigationElement.navigationElements}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const query = graphql`
  query NotFoundQuery {
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

export default NotFoundPage

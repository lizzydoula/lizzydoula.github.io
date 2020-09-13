// libs
import React from 'react'
import { graphql } from 'gatsby'

// component
import { DoulaCircles as Page } from 'components/pages/services/doulaCircles'

const DoulaCicles = ({ data }) => (
  <Page
    data={{
      mainNavigation: data.contentfulNavigationElement.navigationElements,
      pageContent: { ...data.contentfulCourse, instagramPosts: data.allInstaNode.edges }
    }}
  />
)

export const query = graphql`
  query DoulaCiclesQuery {
    allInstaNode(
      filter: { caption: { regex: "/#doula_lizzy_доульскийкружок/" } }
      limit: 5
      sort: { fields: timestamp, order: DESC }
    ) {
      edges {
        node {
          likes
          comments
          id
          localFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
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
    contentfulCourse(contentful_id: { eq: "22nnaxyc24fZF4Is5msjzJ" }, node_locale: { eq: "ru" }) {
      title
      place
      isActive
      subtitleActive
      subtitleInactive
      description {
        json
      }
      reason {
        json
      }
      program {
        json
      }
      features {
        json
      }
      courseImage {
        title
        sizes(maxWidth: 1140, quality: 100, maxHeight: 400) {
          src
        }
      }
      reviewsBlockTitle
      reviews {
        author
        avatar {
          fixed(quality: 100, width: 58, height: 58) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
        content {
          json
        }
      }
    }
  }
`

export default DoulaCicles

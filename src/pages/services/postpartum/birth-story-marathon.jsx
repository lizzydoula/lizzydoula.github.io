import React from 'react'
import { graphql } from 'gatsby'
import { BirthStoryMarathon as Page } from 'components/pages/services/birthStoryMarathon'

const BirthStoryMarathonPage = ({ data }) => (
  <Page
    data={{
      mainNavigation: data.contentfulNavigationElement.navigationElements,
      pageContent: { ...data.contentfulCourse, instagramPosts: data.allInstaNode.edges }
    }}
  />
)

export const query = graphql`
  query BirthStoryMarathonPageQuery {
    allInstaNode(
      filter: { caption: { regex: "/#birthstorymarathon/" } }
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
    contentfulCourse(contentful_id: { eq: "p0rbjU6D5QJwNl5kY6kS5" }, node_locale: { eq: "ru" }) {
      title
      place
      isActive
      subtitleActive
      subtitleInactive
      videoId
      videoTitle
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

export default BirthStoryMarathonPage

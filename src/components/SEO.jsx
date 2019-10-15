/* eslint-disable react/require-default-props */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import config from '../../config/website'

const SEO = props => {
  const { postNode, postPath } = props
  let postURL
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  const title = config.siteTitle
  const description = config.siteDescription
  const image = config.siteUrl + realPrefix + config.siteLogo
  const blogURL = config.siteUrl + config.pathPrefix

  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName ? config.ogSiteName : ''} />
      <meta property="og:url" content={blogURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  postNode: PropTypes.object,
  postPath: PropTypes.string,
  postSEO: PropTypes.bool
}

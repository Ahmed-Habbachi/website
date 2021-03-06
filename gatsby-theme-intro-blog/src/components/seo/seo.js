import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

const SEO = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            locale
            title
          }
        }
      }
    `
  )

  const {
    description = site.siteMetadata.description,
    meta = [],
    title = site.siteMetadata.title,
  } = props

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.locale,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
      link={[
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon/favicon-32x32.png" },
        { rel: "shortcut icon", type: "image/png", href: "/images/favicon/favicon.ico" },
        { rel: "manifest", type: "image/png", href: "/images/favicon/site.webmanifest" },
      ]}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO

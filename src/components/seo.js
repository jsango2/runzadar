/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            image
            description
            siteUrl
            title
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const keywords = site.siteMetadata?.keywords
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: defaultTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
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
            content: defaultTitle,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            property: `og:image`,
            content:
              "https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg",
          },
          {
            name: " twitter: image",
            content:
              "https://www.sportzone.hr/wp-content/uploads/2020/01/12806018_1686900528256019_7006629476788399817_n.jpg",
          },
          {
            name: "keywords",
            content: keywords,
          },
        ].concat(meta)}
      >
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"></script>
      </Helmet>
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

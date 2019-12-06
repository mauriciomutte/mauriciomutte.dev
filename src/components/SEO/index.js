import React from 'react';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const ogImage = image || 'https://mauriciomutte.github.io/assets/og-image.jpg';

  return(
    <Helmet 
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: `webmention`,
          href: `https://webmention.io/mauriciomutte/webmention`
        },
        {
          rel: `pingback`,
          href: `https://webmention.io/mauriciomutte/xmlrpc`
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:image`,
          content: ogImage
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          name: `google-site-verification`,
          content: `vaUk1-E8adHHgmh9uGiDc92Utjrzky60EpytFgxvMAA`
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
}

export default SEO;
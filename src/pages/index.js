import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import HomePost from '../components/HomePost';

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM YYYY", locale: "pt-BR")
            title
            description
            category
            banner {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

function index({ location, data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      {posts.map(({ node }) => (
        <HomePost
          to={node.fields.slug}
          category={node.frontmatter.category}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          timeToRead={node.timeToRead}
          thumb={node.frontmatter.banner.childImageSharp.fixed.src}
        />
      ))}
    </Layout>
  );
}

export default index;

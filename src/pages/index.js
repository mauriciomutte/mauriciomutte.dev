import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

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
            date(formatString: "MMMM DD, YYYY", difference: "")
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
      <ul>
        {posts.map(({ node }) => (
          <li>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default index;

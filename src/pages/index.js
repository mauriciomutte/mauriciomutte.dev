import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';
import HomePost from '../components/HomePost';

const Wrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

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
      <Wrapper>
        {posts.map(({ node }) => (
          <HomePost
            to={node.fields.slug}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            date={node.frontmatter.date}
            timeToRead={node.timeToRead}
          />
        ))}
      </Wrapper>
    </Layout>
  );
}

export default index;

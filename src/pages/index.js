import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogItem from '../components/BlogItem';

import { BlogSection } from '../components/BlogItem/styled';

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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
          }
        }
      }
    }
  }
`;

export default ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;
  console.log(posts);

  return (
    <Layout path={location.pathname}>
      <h1>Home</h1>
      <BlogSection>
        {posts.map(({ node }) => 
          <BlogItem 
            key={node.fields.slug}
            link={node.fields.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            readTime={node.timeToRead}
          />
        )}
      </BlogSection>
    </Layout>
  );
}
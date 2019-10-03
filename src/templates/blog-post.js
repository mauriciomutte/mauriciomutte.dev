import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug} }) {
      html
      timeToRead
      frontmatter {
        title
        category
      }
    }
  }
`;

export default ({ data }) => {
  const html = data.markdownRemark.html
  const post = data.markdownRemark.frontmatter;
  console.log(post);
  return (
    <Layout>
      <SEO title={post.title} />
      <PostHeader
        title={post.title}
        category={post.category}
        timeToRead={data.markdownRemark.timeToRead}
      />
      <PostContent dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}
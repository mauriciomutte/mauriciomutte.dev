import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);
  return (
    <Layout>
      <PostHeader
        title={post.frontmatter.title}
      />
      <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
}
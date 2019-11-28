import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';
import Comments from '../components/Comments';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug} }) {
      html
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        category
      }
    }
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostHeader
        title={post.frontmatter.title}
        category={post.frontmatter.category}
        timeToRead={post.timeToRead}
      />
      <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <Comments url={post.fields.slug} title={post.frontmatter.title}/>
    </Layout>
  );
}
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostHeader from '../components/PostHeader';
import PostContent from '../components/PostContent';
import PostComments from '../components/PostComments';
import PostRecommended from '../components/PostRecommended';

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

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const next = pageContext.next;
  const previous = pageContext.previous;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostHeader
        title={post.frontmatter.title}
        category={post.frontmatter.category}
        timeToRead={post.timeToRead}
      />
      <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      <PostRecommended next={next} previous={previous} />
      <PostComments url={post.fields.slug} title={post.frontmatter.title}/>
    </Layout>
  );
}
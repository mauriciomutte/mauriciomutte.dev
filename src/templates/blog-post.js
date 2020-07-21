import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import PostHeader from '../components/PostHeader/PostHeader';
import PostContent from '../components/PostContent/PostContent';
import PostRecommended from '../components/PostRecommended/PostRecommended';
import PostContribute from '../components/PostContribute/PostContribute';

const PostWrapper = styled.div`
  margin: 0 5%;

  @media (min-width: 700px) {
    margin: 0 10%;
  }
`;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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

export default function blogPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const next = pageContext.next;
  const previous = pageContext.previous;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostWrapper>
        <PostHeader
          title={post.frontmatter.title}
          category={post.frontmatter.category}
          timeToRead={post.timeToRead}
        />
        <PostContent dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostContribute
          title={post.frontmatter.title}
          link={post.fields.slug}
        />
        <PostRecommended next={next} previous={previous} />
      </PostWrapper>
    </Layout>
  );
}

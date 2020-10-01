import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const PostContentStyle = styled.section`
  color: var(--post-text);
  font-size: 1.06rem;

  p {
    line-height: 1.6;
    margin: 10px 0 20px;
  }

  a {
    color: var(--primary);
    text-decoration: underline;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--post-heading);
    font-weight: var(--font-bold);
    margin: 2em 0 0.5em;
  }

  h2 {
    font-size: 1.7rem;
  }

  h3 {
    font-size: 1.5;
  }

  h4 {
    font-size: 1.4;
  }

  h5 {
    font-size: 1.3;
  }

  h6 {
    font-size: 1.2;
  }

  ul,
  ol {
    padding: 0 0 1px 25px;
    line-height: 1.3;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: upper-roman;
  }

  li {
    margin: 0 0 10px;
  }

  img {
    border-radius: 10px;
    display: flex;
    margin: auto;
    height: auto;
    width: 100%;
    max-width: 800px;
}
  }

  .gatsby-highlight {
    background-color: #0007;
    border-radius: 0.3em;
    margin: 0.5em auto;
    max-width: 900px;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    min-width: 100%;
  }

  ${media.greaterThan('small')`
    font-size: 1.12rem;
  `}
`;

const PostContent = ({ ...props }, { children }) => (
  <PostContentStyle {...props}>{children}</PostContentStyle>
);

export default PostContent;

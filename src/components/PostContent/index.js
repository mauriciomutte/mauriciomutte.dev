import React from 'react';

import styled from 'styled-components';

const PostContent = styled.section`
  margin: 2em 5%;
  font-size: 1.06rem;

  p {
    line-height: 1.4;
    margin: 10px 0 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #fd8783;
    font-weight: 600;
    margin: 10px 0 15px;
  }

  h2 {
    font-size: 1.7rem;
    margin: 25px 0 10px;
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

  ul, ol {
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
    margin: 0 0 15px;
  }

  @media (min-width: 700px) {
    font-size: 1.12rem;
  }
`;

export default ( {...props}, {children}) => {
  return (
    <PostContent {...props}>
      {children}
    </PostContent>
  );
}
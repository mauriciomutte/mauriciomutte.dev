import React from 'react';

import * as S from './styled';

const BlogItem = (props) => (
  <S.BlogLink to={props.link} key={props.keys}>
    <S.BlogPost>
      <S.BlogPostCategory>{props.category}</S.BlogPostCategory>
      <h2>{props.title}</h2>
    </S.BlogPost>
  </S.BlogLink>
);

export default BlogItem;
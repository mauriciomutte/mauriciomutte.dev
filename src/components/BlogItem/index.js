import React from 'react';

import * as S from './styled';

import defaultPostBanner from '../../../content/assets/og-image.jpg';

const BlogItem = (props) => (
  <S.BlogLink
    style={{
      backgroundImage: `url(${defaultPostBanner})`,
    }}
    to={props.link}
    key={props.keys}
  >
    <S.BlogPost>
      <S.BlogPostCategory>{props.category}</S.BlogPostCategory>
      <h2>{props.title}</h2>
    </S.BlogPost>
  </S.BlogLink>
);

export default BlogItem;

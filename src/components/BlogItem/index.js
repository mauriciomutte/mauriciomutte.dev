import React from 'react';

import * as S from './styled';

const BlogItem = (props) => (
  <S.BlogLink to={props.link}>
    <S.BlogItem key={props.key}>
      <S.BlogCategory>{props.category}</S.BlogCategory>
      <S.BlogItemTitle>{props.title}</S.BlogItemTitle>
      <div>
        <time>{props.date}</time>
        <span>Leitura de {props.readTime}min</span>
      </div>
    </S.BlogItem>
  </S.BlogLink>
);

export default BlogItem;
import React from 'react';

import * as S from './styled';

const PostRecommended = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.Item>
        <S.Title>Anterior</S.Title>
        <S.RecommendedLink
          to={previous.fields.slug}
        >
          {previous.frontmatter.title}
        </S.RecommendedLink>
      </S.Item>
      
    )}
    {next && (
      <S.Item>
        <S.Title>Próximo</S.Title>
        <S.RecommendedLink
          to={next.fields.slug}
        >
          {next.frontmatter.title}
        </S.RecommendedLink>
      </S.Item>
    )}
  </S.RecommendedWrapper>
);

export default PostRecommended;
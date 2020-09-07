import React from 'react';

import * as S from './styles';

const PostHeader = ({ date, title, description, category, timeToRead }) => (
  <S.HeaderWrapper>
    <S.Category>{category}</S.Category>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.PostInfo>
      {date} • {timeToRead}min de leitura
    </S.PostInfo>
  </S.HeaderWrapper>
);

export default PostHeader;

import React from 'react';

import * as S from './styles';

const HomePost = ({ to, title, date, description, timeToRead }) => {
  return (
    <S.PostItem to={to}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Footer>
        <S.Infos>
          {date} • {timeToRead}min de leitura
        </S.Infos>
        <S.ReadMore>
          Read more <span>&gt;&gt;&gt;</span>
        </S.ReadMore>
      </S.Footer>
    </S.PostItem>
  );
};

export default HomePost;

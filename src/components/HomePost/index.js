import React from 'react';

import * as S from './style';

const HomePost = ({ to, category, title, thumb, date, timeToRead }) => {
  return (
    <S.PostItem to={to}>
      <S.Thumb src={thumb} alt="" />
      <div>
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
        <S.Infos>
          {date} • {timeToRead}min de leitura
        </S.Infos>
      </div>
    </S.PostItem>
  );
};

export default HomePost;

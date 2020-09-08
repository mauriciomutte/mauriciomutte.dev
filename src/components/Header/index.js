import React from 'react';

import Navbar from '../Navbar';

import * as S from './styles';

const Header = () => (
  <S.Header>
    <S.Wrapper>
      <S.Logo to="/">Maurício Mutte</S.Logo>
      <Navbar />
    </S.Wrapper>
  </S.Header>
);

export default Header;

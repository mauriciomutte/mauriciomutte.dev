import React from 'react';

import * as S from './styles';

const Navbar = ({ path }) => (
  <S.Header>
    <S.Wrapper>
      <S.Logo to="/">Maurício Mutte</S.Logo>
      <S.MenuNav>
        <ul>
          <li>
            <S.MenuItem to="/">Home</S.MenuItem>
          </li>
          <li>
            <S.MenuItem to="/">About</S.MenuItem>
          </li>
        </ul>
      </S.MenuNav>
    </S.Wrapper>
  </S.Header>
);

export default Navbar;

import React from 'react';

import * as S from './styles';

const Navbar = () => (
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
);

export default Navbar;

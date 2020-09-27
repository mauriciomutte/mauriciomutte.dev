import React from 'react';

import * as S from './styles';

const Navbar = ({ path }) => (
  <S.MenuNav>
    <ul>
      <li>
        <S.MenuItem to="/" isActive={new RegExp('^/$').test(path)}>
          Home
        </S.MenuItem>
      </li>
      <li>
        <S.MenuItem to="/about" isActive={new RegExp('^/about').test(path)}>
          About
        </S.MenuItem>
      </li>
    </ul>
  </S.MenuNav>
);

export default Navbar;

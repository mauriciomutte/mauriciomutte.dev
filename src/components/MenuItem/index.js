import React from 'react';

import * as S from './styled';

const MenuItem = ({ children, to, name, isActive }) => (
  <S.MenuItem>
    <S.MenuLink to={to} isActive={isActive}>
      {children}
      {name}
    </S.MenuLink>
  </S.MenuItem>
);

export default MenuItem;

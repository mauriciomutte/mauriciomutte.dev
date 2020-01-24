import React from 'react';

import * as S from './styled';

export default function MenuItem({ children, to, name, isActive }) {
  return (
    <S.MenuItem>
      <S.MenuLink to={to} isActive={isActive}>
        {children}
        {name}
      </S.MenuLink>
    </S.MenuItem>
  );
}
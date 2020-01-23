import React from 'react';

import * as S from './styled';

export default ({ children, to, name, isActive }) => {
  return (
    <S.MenuItem>
      <S.MenuLink to={to} isActive={isActive}>
        <div>
          {children}
          {name}
        </div>
      </S.MenuLink>
    </S.MenuItem>
  );
}
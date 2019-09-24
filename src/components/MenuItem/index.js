import React from 'react';

import * as S from './styled';

export default ({children, to, name}) => {
  return (
    <S.MenuItem>
      <S.MenuLink to={to}>
        <div>
          {children}
          {name}
        </div>
      </S.MenuLink>
    </S.MenuItem>
  );
}
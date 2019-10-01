import React from 'react';

import Navbar from '../Navbar';
import * as S from './styled';
import GlobalStyle from '../../styles/global';

export default ({ path, children }) => {

  return (
    <S.Layout>
      <GlobalStyle />
      <Navbar path={path}/>
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}
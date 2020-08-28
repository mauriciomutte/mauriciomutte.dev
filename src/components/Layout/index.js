import React from 'react';
import { Spring } from 'react-spring/renderprops';

import Navbar from '../Navbar';
import GlobalStyle from '../../styles/global';

import * as S from './styles';

const Layout = ({ path, children }) => (
  <S.Wrapper>
    <GlobalStyle />
    <Navbar path={path} />
    <Spring
      from={{
        opacity: 0,
        transform: 'translate3d(0,50px,0)',
      }}
      to={{
        opacity: 1,
        transform: 'translate3d(0px,0,0)',
      }}
    >
      {(props) => <S.Main style={props}>{children}</S.Main>}
    </Spring>
  </S.Wrapper>
);

export default Layout;

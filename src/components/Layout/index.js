import React from 'react';
import { useStaticQuery ,Link, graphql } from 'gatsby';

import Navbar from '../Navbar';
import * as S from './styled';
import GlobalStyle from '../../styles/global';

export default ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <S.Layout>
      <GlobalStyle />
      <Navbar />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}
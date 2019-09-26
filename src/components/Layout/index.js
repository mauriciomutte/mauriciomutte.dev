import React from 'react';
import { Helmet } from 'react-helmet';
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
            description
          }
        }
      }
    `
  );

  return (
    <S.Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={site.siteMetadata.description} />
        <title>{site.siteMetadata.title}</title>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}
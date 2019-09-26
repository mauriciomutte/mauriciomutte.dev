import styled from 'styled-components';

export const Layout = styled.div`
  h1 {
    color: #fd8783;
    font-size: 32px;
    font-weight: bold;
    margin: 1em 5%;
  }
`;

export const Main = styled.main`
  padding-bottom: 60px;

  @media (min-width: 1000px) {
    padding-left: 8%;
  }
`;
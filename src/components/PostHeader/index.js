import React from 'react';

import styled from 'styled-components';

const PropsHeader = styled.section`
  margin: 3em 5% 0;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin: auto;

    @media (min-width: 700px) {
      width: 80%;
      font-size: 3.3rem;
    }
  }
`;

export default (props) => {
  return (
    <PropsHeader>
      <h1>{props.title}</h1>
    </PropsHeader>
  );
}
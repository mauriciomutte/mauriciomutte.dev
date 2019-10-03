import React from 'react';

import styled from 'styled-components';

const PropsHeader = styled.section`
  margin: 2em 5% 4em;
  text-align: center;

  h1 {
    font-size: 2rem;
    text-align: center;
    margin: auto;

    @media (min-width: 700px) {
      width: 80%;
      font-size: 3.3rem;
    }
  }

  span {
    background-color: #1F232E;
    border-radius: 5px;
    display: inline-block;
    font-weight: bold;
    margin: 1em;  
    padding: 7px 15px;
  }
`;

export default (props) => {
  return (
    <PropsHeader>
      <span>{props.category}</span>
      <span>Leitura: {props.timeToRead}min</span>
      <h1>{props.title}</h1>
    </PropsHeader>
  );
}
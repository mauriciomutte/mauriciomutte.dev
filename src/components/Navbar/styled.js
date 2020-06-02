import styled from 'styled-components';

export const MenuNav = styled.nav`
  background-color: #1f232e;

  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 1000px) {
    background-color: transparent;
    left: 0;
    flex-direction: column;
    bottom: 0;
    right: 92%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

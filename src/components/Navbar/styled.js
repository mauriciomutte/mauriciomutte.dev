import styled from 'styled-components';

export const MenuNav = styled.nav`
  background-color: #1F232E;

  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  @media (min-width: 1000px) {
    background-color: transparent;
    left: 0;
    bottom: 0;
    right: 92%;
    top: 0;
    display: flex;
    align-items: center;
    
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 1000px) {
    flex-direction: column;
  }
`;
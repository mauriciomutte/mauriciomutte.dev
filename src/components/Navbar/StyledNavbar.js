import styled from 'styled-components';

import { Link } from 'gatsby';

export const MenuLink = styled(Link)`
  color: ${(props) => (props.isActive ? '#fd8783' : '#FFF')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  padding: 7px 0;

  @media (min-width: 1000px) {
    margin: 1.5em 0;
  }
`;

export const MenuNav = styled.nav`
  background-color: var(--menuBackground);

  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 1000px) {
    background-color: var(--menuBackground);
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

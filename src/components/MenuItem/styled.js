import styled from 'styled-components';

import { Link } from 'gatsby';

export const MenuItem = styled.div`
  display: flex;
`;

export const MenuLink = styled(Link)`
  color: ${props => props.isActive ? '#fd8783' : '#FFF'};
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  padding: 7px 0;

  @media (min-width: 1000px) {
    margin: 1.5em 0;
  }
`;
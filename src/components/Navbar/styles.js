import styled from 'styled-components';

import { Link } from 'gatsby';

export const MenuNav = styled.nav`
  margin: 0 40px;
  ul {
    display: flex;
    flex-direction: row;
  }
`;

export const MenuItem = styled(Link)`
  font-size: 16px;
  font-weight: var(--font-bold);
  padding: 10px;
`;

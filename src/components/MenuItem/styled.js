import styled from 'styled-components';

import { Link } from 'gatsby';

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
`;

export const MenuLink = styled(Link)`
  div {
    padding: 7px 0;

    @media (min-width: 1000px) {
      margin: 1em 0;
      padding: 1em;
    }
  }
`;
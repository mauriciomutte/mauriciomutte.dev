import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'gatsby';

export const MenuNav = styled.nav`
  margin: 0.4rem 0 1.2rem;

  ul {
    display: flex;
    flex-direction: row;
  }

  ${media.greaterThan('small')`
    margin: 0 40px;
  `}
`;

export const MenuItem = styled(Link)`
  font-size: 16px;
  font-weight: var(--font-bold);
  padding: 10px;
`;

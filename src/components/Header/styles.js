import styled from 'styled-components';
import media from 'styled-media-query';

import { Link } from 'gatsby';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  max-width: 1000px;
  padding: 0 1em;

  ${media.lessThan('small')`
    flex-direction: column;
  `}
`;

export const Header = styled.header`
  background-color: var(--background-menu);
  margin: 0;
  padding: 20px 0;
`;

export const Logo = styled(Link)`
  color: var(--primary);
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -1px;
  margin: 0;

  ${media.greaterThan('small')`
    font-size: 24px;
  `}
`;

export const ThemeToggle = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 100%;
  height: 30px;
  background: var(--primary);
  width: 30px;

  ${media.greaterThan('small')`
    margin-left: auto;
  `}
`;

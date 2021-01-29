import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  margin: 2rem auto;
  width: min(100%, 505px);

  ${media.greaterThan('medium')`
    margin: 3rem auto;
  `}
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none !important;

  a {
    color: var(--post-text);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary);
    }
  }
`;

export const IconWrapper = styled.div`
  fill: #bbb;
  height: 35px;
  width: 35px;

  ${media.greaterThan('medium')`
    height: 45px;
    width: 45px;
  `}
`;

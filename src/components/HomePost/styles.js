import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItem = styled(Link)`
  background: var(--background-card);
  border-radius: 12px;
  color: var(--post-text);
  box-shadow: 6px 6px 10px #0005;
  display: flex;
  flex-direction: column;
  margin: 2em 1em;
  padding: 1.5rem;
  transition: 0.3s;

  &:hover,
  &:focus {
    box-shadow: 3px 3px 1px #0005;
    color: var(--primary);
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: var(--font-xbold);
  margin: 5px 0;
`;

export const Description = styled.h4`
  color: var(--gray);
  font-size: 18px;
  font-weight: var(--font-medium);
  margin: 10px 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
`;

export const Infos = styled.span`
  margin-top: auto;
  color: var(--gray);
  font-size: 14px;
  font-weight: var(--font-xbold);
`;

export const ReadMore = styled.span`
  font-size: 15px;
  font-weight: var(--font-xbold);
  text-align: end;
  span {
    color: var(--primary);
  }
`;

import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItem = styled(Link)`
  background: var(--cardBackground);
  border-radius: 12px;
  box-shadow: 6px 6px 10px #0005;
  display: flex;
  flex-direction: column;
  margin: 2em 1em;
  padding: 1.5rem;
  transition: 0.3s;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: var(--font-weight-extrabold);
  margin: 5px 0;
`;

export const Description = styled.h4`
  color: var(--gray);
  font-size: 18px;
  font-weight: var(--font-weight-medium);
  margin: 10px 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
`;

export const Infos = styled.span`
  margin-top: auto;
  color: #fff7;
  font-size: 14px;
  font-weight: var(--font-weight-extrabold);
`;

export const ReadMore = styled.span`
  font-size: 15px;
  font-weight: var(--font-weight-extrabold);
  span {
    color: var(--primary);
  }
`;

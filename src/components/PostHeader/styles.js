import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4em 2em;
  text-align: center;
`;

export const Category = styled.span`
  color: var(--primary);
  font-size: 16px;
  font-weight: var(--font-bold);
`;

export const Title = styled.h2`
  color: var(--post-text);
  font-size: 38px;
  font-weight: var(--font-xbold);
  margin: 2rem 0 0;
`;

export const Description = styled.h3`
  color: var(--gray);
  font-size: 20px;
  font-weight: var(--font-medium);
  max-width: 600px;
  margin: 1em 0 2em;
`;

export const PostInfo = styled.span`
  color: var(--gray);
  font-size: 14px;
  font-weight: var(--font-bold);
`;

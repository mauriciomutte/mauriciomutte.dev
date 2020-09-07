import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4em 2em;
  text-align: center;
`;

export const Category = styled.span`
  color: var(--primary);
  font-size: 16px;
  font-weight: var(--font-weight-bold);
`;

export const Title = styled.h2`
  font-size: 38px;
  font-weight: var(--font-weight-extrabold);
  margin: 2rem 0 0;
`;

export const Description = styled.h3`
  color: var(--gray);
  font-size: 20px;
  font-weight: var(--font-weight-medium);
  max-width: 600px;
  margin: 1em 0 2em;
`;

export const PostInfo = styled.span`
  color: #fff5;
  font-size: 14px;
  font-weight: var(--font-weight-bold);
`;

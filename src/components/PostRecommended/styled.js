import styled from 'styled-components';

import { Link } from 'gatsby';

export const RecommendedWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1em;
  overflow: hidden;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #fd8783;
  font-size: 20px; 
  font-weight: bold;
  margin-bottom: 5px;
`;

export const RecommendedLink = styled(Link)`
  align-items: center;
  background-color: #1F232E;
  border-radius: 5px;
  display: flex;
  font-size: 18px;
  height: 100%;
  padding: 1em;
`;
import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItem = styled(Link)`
  background: var(--cardBackground);
  border-radius: 12px;
  box-shadow: 6px 6px 10px #0005;
  display: flex;
  margin: 2rem 1em;
  max-width: 1000px;
  padding: 1rem 10px;
  transition: 0.3s;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    margin: 5px 15px;
  }

  &:hover {
    background: #222c4d;
    box-shadow: 2px 2px 5px #000;
  }

  @media (min-width: 500px) {
    margin: 2rem auto;
  }
`;

export const Thumb = styled.img`
  border-radius: 10px;
  height: 6rem;
  width: 6rem;

  @media (min-width: 500px) {
    height: 6rem;
    width: 10rem;
  }
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  margin: 5px 0;

  @media (min-width: 500px) {
    font-size: 1.35rem;
  }
`;

export const Category = styled.span`
  background: red;
  border-radius: 5px;
  font-size: 10px;
  padding: 3px 9px;
  text-transform: uppercase;
  font-weight: 900;
  width: min-content;

  @media (min-width: 500px) {
    font-size: 11px;
  }
`;

export const Infos = styled.span`
  margin-top: auto;
  color: #fff7;
  font-size: 11px;
  font-weight: 600;

  @media (min-width: 500px) {
    font-size: 13px;
  }
`;

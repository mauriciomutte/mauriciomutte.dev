import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlogSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

export const BlogLink = styled(Link)`
  display: flex;
`;

export const BlogItem = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 1em 0;
  padding: 1em;
  width: 320px;

  @media (min-width: 600px) {
    margin: 1em;
    width: 375px;
    transition: all .2s ease-in;

    :hover {
      background-color: rgba(250,250,250,.08);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const BlogItemTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 15px;
`;
import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlogSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2em 0;
`;

export const BlogLink = styled(Link)`
  display: flex;
  margin: 1em 0;

  @media (min-width: 600px) {
    margin: 1em;
  }
`;

export const BlogItem = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1em;
  width: 320px;

  @media (min-width: 600px) {
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
  margin: 10px 0 15px;
`;

export const BlogCategory = styled.span`
  background-color: #1F232E;
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
`;
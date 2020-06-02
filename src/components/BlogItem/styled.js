import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlogSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2em 0;
`;

export const BlogLink = styled(Link)`
  background-image: url('https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg');
  background-size: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 15px #0007;
  margin: 1em;
`;

export const BlogPost = styled.div`
  background: linear-gradient(180deg, #0006 0%, #000 90%);
  border-radius: 5px;
  display: flex;
  height: 180px;
  flex-direction: column;
  padding: 20px;
  position: relative;
  width: 400px;

  h2 {
    margin-top: auto;
    font-size: 20px;
    font-weight: 600;
  }

  :hover {
    background: linear-gradient(180deg, #0000 0%, #000000 90%);
  }
`;

export const BlogPostCategory = styled.span`
  background: #fd8783;
  font-size: 14px;
  border-radius: 5px 0 5px;
  font-weight: 600;
  padding: 7px 0;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  text-transform: uppercase;
  width: 120px;
`;

import React from 'react';

import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 15%;

  @media (min-width: 768px) {
    margin-bottom: 10%;
  }

  @media (min-width: 1400px) {
    margin-bottom: 6%;
  }
`;

const BannerImg = styled.img`
  height: 25vh;
  max-width: 100%;
  filter: blur(8px);

  @media (min-width: 768px) {
    height: 35vh;
    width: 100%;
  }
`;

const PropsHeader = styled.section`
  background-color: var(--cardBackground);
  border-radius: 30px;
  box-shadow: 0 0 50px #0006;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1em 2em;

  position: absolute;
  bottom: -5vh;
  width: 70%;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1400px) {
    width: 40%;
  }
`;

export const Title = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;

  @media (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

export const Category = styled.span`
  background: red;
  border-radius: 5px;
  font-size: 0.7rem;
  padding: 3px 9px;
  text-transform: uppercase;
  font-weight: 900;
  width: min-content;

  @media (min-width: 768px) {
    font-size: 11px;
  }
`;

export const PostInfos = styled.span`
  margin-top: auto;
  color: #fff7;
  font-size: 0.8rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`;

const PostHeader = ({ date, title, banner, category, timeToRead }) => (
  <HeaderWrapper>
    <BannerImg src={banner} alt="" />
    <PropsHeader>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <PostInfos>
        {date} • {timeToRead}min de leitura
      </PostInfos>
    </PropsHeader>
  </HeaderWrapper>
);

export default PostHeader;

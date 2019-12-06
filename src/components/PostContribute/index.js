import React from 'react';
import styled from 'styled-components';

const PostContribute = styled.div`
  padding: 3em 0 2em;
  text-align: right;

  span {
    margin: 0 10px;
  }

  a {
    color: #fd8783;
    font-size: 1.15rem;

    :hover {
      text-decoration: underline;
    }
  }
`;

export default ( {title, link})  => {
  const twitter = `https://twitter.com/intent/tweet?text=${title}&url=https://mauriciomutte.github.io${link}&via=mauriciomutte`;
  const github = `https://github.com/mauriciomutte/mauriciomutte.github.io/blob/main/content/blog${link}index.md`;

  return (
    <PostContribute>
      <a href={twitter} target="_blank" rel="noopener noreferrer">Comentar no Twitter</a>
      <span> • </span>
      <a href={github} target="_blank" rel="noopener noreferrer" >Editar o post no Github</a>
    </PostContribute>
  );
}
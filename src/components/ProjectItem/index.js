import React from 'react';
import * as S from './styled';

const ProjectItem = (props) => (
  <S.ProjectItem href={props.href} target="_blank" rel="noopener">
    <S.Name>{props.name}</S.Name>
    <S.Description role="img">{props.description}</S.Description>
    <p>
      <S.Language>
        <span></span> {props.language}
      </S.Language>
      <S.Stars>
        <span role="img" aria-label="emoji">
          ⭐
        </span>{' '}
        {props.stars}
      </S.Stars>
    </p>
  </S.ProjectItem>
);

export default ProjectItem;

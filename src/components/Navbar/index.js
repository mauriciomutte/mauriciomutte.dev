import React from 'react';

import MenuItem from '../MenuItem';

import HomeIcon from '../Icons/HomeIcon';
import ProjectsIcon from '../Icons/ProjectsIcon';
import AboutIcon from '../Icons/AboutIcon';

import * as S from './styled';

export default () => {
  return (
    <S.MenuNav>
      <S.MenuList>
        <MenuItem name="Home" to="/">
          <HomeIcon />
        </MenuItem>

        <MenuItem name="Projetos" to="/projetos">
          <ProjectsIcon />
        </MenuItem>

        <MenuItem name="Sobre" to="/sobre">
          <AboutIcon />
        </MenuItem>
      </S.MenuList>
    </S.MenuNav>    
  );
}
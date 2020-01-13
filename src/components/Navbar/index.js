import React from 'react';

import MenuItem from '../MenuItem';

import HomeIcon from '../Icons/HomeIcon';
import ProjectsIcon from '../Icons/ProjectsIcon';
import AboutIcon from '../Icons/AboutIcon';

import * as S from './styled';

export default ({ path }) => {
  return (
    <S.MenuNav>
      <S.MenuList>
        <MenuItem
          name="Home"
          to="/"
          isActive={new RegExp('^/$').test(path)}
        >
          <HomeIcon />
        </MenuItem>

        <MenuItem
          name="Projetos"
          to="/projetos"
          isActive={new RegExp('^/projetos').test(path)}
        >
          <ProjectsIcon />
        </MenuItem>

        <MenuItem
          name="Sobre"
          to="/sobre"
          isActive={new RegExp('^/sobre').test(path)}
        >
          <AboutIcon />
        </MenuItem>
      </S.MenuList>
    </S.MenuNav>    
  );
}
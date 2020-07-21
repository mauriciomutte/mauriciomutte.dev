import React from 'react';

import HomeIcon from '../Icons/HomeIcon';
import ProjectsIcon from '../Icons/ProjectsIcon';
import AboutIcon from '../Icons/AboutIcon';

import * as S from './StyledNavbar';

const Navbar = ({ path }) => (
  <S.MenuNav>
    <S.MenuLink to="/" isActive={new RegExp('^/$').test(path)}>
      <HomeIcon />
      Home
    </S.MenuLink>

    <S.MenuLink to="/" isActive={new RegExp('^/projetos').test(path)}>
      <ProjectsIcon />
      Projetos
    </S.MenuLink>

    <S.MenuLink to="/" isActive={new RegExp('^/Sobre').test(path)}>
      <AboutIcon />
      Sobre
    </S.MenuLink>
  </S.MenuNav>
);

export default Navbar;

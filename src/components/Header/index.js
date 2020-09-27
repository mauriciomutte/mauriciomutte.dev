import React, { useState, useEffect } from 'react';

import Navbar from '../Navbar';

import WaveSvg from './WaveSvg';
import { MoonIcon, SunIcon } from './Icons';
import * as S from './styles';

const Header = ({ path }) => {
  const [theme, setTheme] = useState(null);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <S.Logo to="/">Maurício Mutte</S.Logo>
          <Navbar path={path} />

          <S.ThemeToggle
            title="Mudar o tema"
            role="button"
            onClick={() =>
              window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
            }
          >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </S.ThemeToggle>
        </S.Wrapper>
      </S.Header>
      <WaveSvg />
    </>
  );
};

export default Header;

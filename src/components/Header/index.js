import React, { useState, useEffect } from 'react';

import Navbar from '../Navbar';

import WaveSvg from './WaveSvg';
import * as S from './styles';

const Header = () => {
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
          <Navbar />
          <button
            style={{ marginLeft: 'auto ' }}
            onClick={() =>
              window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
            }
          >
            Switch theme
          </button>
        </S.Wrapper>
      </S.Header>
      <WaveSvg />
    </>
  );
};

export default Header;

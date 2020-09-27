import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  /* Reset
  /* ---------------------------------------------------------- */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Variables
  /* ---------------------------------------------------------- */

  body {
    --primary: #946CFF;
    --secondary: #FF946C;
    --tertiary: #6CFF94;
    --white: #fff;
    --black: #222;
    --background-menu: #1E262F;

    --font-xbold: 800;
    --font-bold: 700;
    --font-medium: 600;
    --font-normal: 400;
  }

  body.dark {
    --background: #0E141B;
    --background-card: #1E262F;

    --gray: #FFF8;
    --post-text: #fff;
    --post-heading: #FF946C;
  }

  body.light {
    --background: #EBEBEC;
    --background-card: #FFF;

    --gray: #0006;
    --post-text: #333;
    --post-heading: #333;
  }

  /* Default
  /* ---------------------------------------------------------- */

  body {
    background-color: var(--background);
    color: var(--white);
    font-family: 'Nunito Sans', sans-serif;
    line-height: 1;
  }
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export default GlobalStyles;

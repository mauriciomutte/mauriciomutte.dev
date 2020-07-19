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
    --borders: #38444d;
    --texts: #8899a6;
    --postColor: #fff;
    --highlight: #1fa1f2;
    --cardBackground: #1E2745;
    --menuBackground: #161D34;
    --background: #182039;
    --white: #fff;
    --black: #222;
  }

  /* Default
  /* ---------------------------------------------------------- */

  body {
    background-color: var(--background);
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
    line-height: 1;
  }
  a {
    color: var(--white);
    text-decoration: none;
  }
`;

export default GlobalStyles;

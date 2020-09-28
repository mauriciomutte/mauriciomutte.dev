import styled from 'styled-components';
import media from 'styled-media-query';

export const AboutMeWrapper = styled.div`
  color: var(--post-text);
  text-align: center;
  padding: 1rem;

  h1,
  h2 {
    font-weight: var(--font-xbold);
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 36px;
  }

  h1 {
    font-size: 32px;
  }
`;

export const AboutMeSection = styled.div`
  align-items: center;
  background: var(--post-bg);
  border-radius: 10px;
  display: flex;
  margin: auto;
  max-width: 900px;
  padding: 1rem 2rem;

  :hover {
    img {
      border: 5px solid var(--secondary);
    }
  }

  ${media.lessThan('medium')`
    flex-direction: column;
  `}

  h3 {
    font-size: 26px;
    font-weight: var(--font-xbold);
    margin: 2rem 0 1rem;
  }

  img {
    background: var(--primary);
    border: 5px solid var(--primary);
    border-radius: 50%;
    height: 250px;
    transition: 3s;
    width: 250px;

    ${media.greaterThan('medium')`
      margin-right: 2rem;
    `}
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
    margin: 10px 0 20px;
    text-align: left;
  }
`;

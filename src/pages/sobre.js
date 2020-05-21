import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import me from '../../content/assets/me.jpeg';

const AboutPage = styled.section`
  margin: 4em 5%;
  text-align: center;

  h2 {
    color: #fd8783;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 1em;
  }

  ul {
    font-size: 1.2rem;
    line-height: 1.5;
    list-style: disc;
    margin: 0 0 2em;
    padding-left: 30px;
    text-align: left;

    li {
      margin: 5px 0;
    }
  }

  a {
    color: #fd8783;
    padding-left: 5px;

    :hover {
      text-decoration: underline;
    }
  }
`;

const AboutMeSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 3em;
  max-width: 1300px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    box-shadow: 0 0 10px #000;
    border-radius: 50%;
    height: 250px;
    width: 250px;
  }

  .resume {
    margin: 0 5em;
  }

  p {
    font-size: 1.2rem;
    margin: 0 0 2em;
    line-height: 1.5;

    @media (min-width: 600px) {
      text-align: left;
    }
  }

  h1 {
    font-size: 3rem;
    margin: 20px 0;
  }
`;

function sobre({ location }) {
  return (
    <Layout path={location.pathname}>
      <SEO title="Sobre" />
      <AboutPage>
        <AboutMeSection className="aboutme">
          <img src={me} alt=""/>
        
          <div className="resume">
            <h1>Olá!</h1>
            <p>
              Meu nome é Maurício Mutte, sou um Frontend Developer de Porto Alegre/RS em início de carreira. 
              Assumo o título de Frontend mas estudo diariamente para me tornar um Fullstack Developer.
            </p>
            <p>
              Comecei a programar por diversão aos 14 anos, aos 16 passei a me empenhar para ser um desenvolvedor.
              Hoje, com 18 anos, ja participei de pequenos projetos, contribuo com projetos open-source e estou em
              busca do meu primeiro emprego formal em um ambiente que possa me fornecer aprendizados e crescimento. 
            </p>
          </div>
        </AboutMeSection>
        
        <h2>Habilidades</h2>
        <ul>
          <li>HTML</li>
          <li>CSS (BEM, Sass)</li>
          <li>Javascript (ES6/7)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>REST</li>
          <li>GraphQL</li>
          <li>Git / Github</li>
          <li>Design Responsivo</li>
        </ul>

        <h2>Contato</h2>
        <ul>
          <li>
            Github:
            <a href="https://github.com/mauriciomutte">@mauriciomutte</a>
          </li>
          <li>
            Twitter: 
            <a href="https://twitter.com/mauriciomutte" rel="me">@mauriciomutte</a>
          </li>
          <li>
            Linkedin: 
            <a href="https://www.linkedin.com/in/mauriciomutte/">Maurício Mutte</a>
          </li>
          <li>
            Email: 
            <a href="mailto:mauriciomutte.mm@gmail.com">Enviar um email</a>
          </li>
        </ul>
      </AboutPage>
    </Layout>
  );
}

export default sobre;
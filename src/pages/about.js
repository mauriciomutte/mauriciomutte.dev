import React from 'react';

import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';
import SocialLinks from '../components/SocialLink';
import { AboutMeWrapper, AboutMeSection } from '../styles/base';

function AboutPage({ location }) {
  const myBirthday = new Date('2001/05/30'); // 🙈🙈🙈
  const currentDate = new Date();
  const diffDate = Math.round(currentDate - myBirthday);
  const oneYearInMs = 31556952000;
  const myAge = Math.floor(diffDate / oneYearInMs);

  return (
    <Layout path={location.pathname}>
      <SEO title="Sobre" />
      <AboutMeWrapper>
        <h1>Sobre mim</h1>

        <AboutMeSection>
          <img
            src="https://github.com/mauriciomutte.png"
            alt="Foto do meu rosto bonito"
          />
          <div>
            <h3>Olá, que honra ter você aqui!</h3>
            <p>
              Meu nome é Maurício Mutte, tenho {myAge} anos, nasci em Porto
              Alegre/RS (aka Gaúcho). Sou desenvolvedor Front End na{' '}
              <a href="https://github.com/juntossomosmais" target="_blank" rel="noopener noreferrer">
                Junto Somos Mais
              </a>
              .
            </p>
            <p>
              Sou fascinado por construir coisas novas e uso a programação como
              ferramenta para tal. Por isso, comecei a programar cedo (quando
              estava entrando no Ensino Médio). Ao terminar essa fase, tive
              oportunidades para aplicar meu conhecimento em projetos reais.
            </p>
            <p>
              Sou bem comunicativo, adoro trabalhar em equipe e estou sempre
              compartilhando coisas que aprendo e julgo interessante. Por isso,
              criei esse blog: para ajudar pessoas e como forma de aplicar o
              "Learn In Public".
            </p>
            <p>
              Além de programar, gosto muito de contribuir em projetos open
              source, ouvir músicas, ler livros, jogar vídeo game (CS:GO
              principalmente) e assistir séries.
            </p>
          </div>
        </AboutMeSection>
      </AboutMeWrapper>

      <AboutMeWrapper>
        <h1>Contato</h1>

        <AboutMeSection>
          <SocialLinks />
        </AboutMeSection>
      </AboutMeWrapper>
    </Layout>
  );
}

export default AboutPage;

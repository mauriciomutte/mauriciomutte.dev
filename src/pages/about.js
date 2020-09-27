import React from 'react';

import MeImg from '../../content/assets/me.jpeg';

import SEO from '../components/SEO/SEO';
import Layout from '../components/Layout';
import { AboutMeWrapper, AboutMeSection } from '../styles/base';

function AboutPage({ location }) {
  return (
    <Layout path={location.pathname}>
      <SEO title="Sobre" />
      <AboutMeWrapper>
        <h1>Sobre mim</h1>

        <AboutMeSection>
          <img src={MeImg} alt="" />
          <div>
            <h3>Olá, que honra ter você aqui!</h3>
            <p>
              Meu nome é Maurício Mutte, tenho 19 anos, nasci em Porto Alegre/RS
              (aka Gaúcho), sou desenvolvedor Full Stack e apaixonado por
              projetos open source.
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
              source, ouvir músicas, ler livros, jogar vídeo game ( CS:GO
              principalmente ) e assistir séries.
            </p>
          </div>
        </AboutMeSection>
      </AboutMeWrapper>
    </Layout>
  );
}

export default AboutPage;

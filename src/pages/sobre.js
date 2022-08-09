import Head from 'next/head'
import Image from 'next/image'

import CareerItem from '../components/CareerItem/CareerItem'
import Main from '../layout/Main'
import items from '../data/about'
import styles from '../styles/About.module.css'

function Sobre(props) {
  const { title, description } = props

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://mauriciomutte.dev/sobre/" />
        <meta
          content={`https://mauriciomutte.dev/og-image?title=${title}`}
          property="og:image"
        />
      </Head>

      <section className={styles.section__about}>
        <div className={styles.section__about__image}>
          <Image
            src="https://github.com/mauriciomutte.png"
            height={250}
            width={250}
            alt="Foto de perfil"
          />
        </div>
        <div>
          <h1 className={`${styles.section__about__title} gradient`}>
            Que honra ter você por aqui,
          </h1>
          <p>
            Prazer, eu sou o Maurício Mutte, tenho 20 anos, nasci em Porto
            Alegre/RS (aka Gaúcho). Hoje, atuo como desenvolvedor Front End na
            Junto Somos Mais.
          </p>
          <p>
            Sou fascinado por construir coisas novas e uso a programação como
            ferramenta. Comecei a programar cedo (quando estava entrando no
            Ensino Médio). Ao terminar essa fase, tive oportunidades para
            aplicar meu conhecimento em projetos reais de grandes empresas.
          </p>
          <p>
            Sou bem comunicativo, adoro trabalhar em equipe e estou sempre
            compartilhando coisas que aprendo. Por isso, criei esse blog: como
            uma forma de aplicar o "Learn In Public" e ajudar pessoas.
          </p>
          <p>
            Além de programar, gosto de contribuir em projetos open source,
            ouvir músicas, ler livros, jogar vídeo game (CS:GO principalmente) e
            assistir séries.
          </p>
        </div>
      </section>

      <section className={styles.section__career}>
        <h1>Um pouco da minha carreira</h1>
        {items.map((item) => (
          <CareerItem key={item.occupation} {...item} />
        ))}
      </section>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Sobre | Maurício Mutte',
      description: 'Um pouco mais sobre Maurício Mutte',
    },
  }
}

Sobre.Layout = Main

export default Sobre

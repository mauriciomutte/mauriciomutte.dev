import Head from 'next/head'

import Main from '../layout/Main'
import styles from '../styles/Home.module.css'

function HomePage(props) {
  const { title, description } = props

  return (
    <div className={styles.home__wrapper}>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://mauriciomutte.dev/" property="og:url" />
        <meta
          content={`https://mauriciomutte.dev/og-image?title=${title}`}
          property="og:image"
        />
      </Head>

      <h1 className={styles.home__title}>Maurício Mutte</h1>
      <p className={styles.home__description}>
        Desenvolvedor Front-end na Juntos Somos Mais.
      </p>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Maurício Mutte',
      description: 'Desenvolvedor Front-end na Juntos Somos Mais.',
    },
  }
}

HomePage.Layout = Main

export default HomePage

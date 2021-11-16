import Head from 'next/head'

import Main from '../layouts/Main'

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
      </Head>

      <h1>Sobre</h1>
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
